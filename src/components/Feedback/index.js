import React, { useState, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
import { translate } from "@docusaurus/Translate";
import { GoogleFormProvider, useGoogleForm, useShortAnswerInput } from 'react-google-forms-hooks'
import form from './form.json'
import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import ShortAnswerInput from './components/ShortAnswerInput'
import LongAnswerInput from './components/LongAnswerInput'
import RadioGridInput from './components/RadioGridInput'
import CheckboxGridInput from './components/CheckboxGridInput'
import DropdownInput from './components/DropdownInput'
import LinearGrid from './components/LinearGrid'
import styled from 'styled-components'
import {useLocation} from '@docusaurus/router';
import CloseBtn from '@site/static/img/ico-close.svg';

const Form = styled.form`
  max-width: 580px;
  margin: 0 auto;
  padding: 15px;
`

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`

const QuestionLabel = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
`

const QuestionHelp = styled.p`
  font-size: 0.8rem;
  color: #5c5c5c;
  margin-top: 0px;
`

const Questions = () => {
  const location = useLocation();
  const curLocation = location.pathname;
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field

        let questionInput = null
        switch (field.type) {
          case 'CHECKBOX':
            questionInput = <CheckboxInput id={id} />
            break
          case 'RADIO':
            questionInput = <RadioInput id={id} />
            break
          case 'SHORT_ANSWER':
            questionInput = <ShortAnswerInput id={id} location={curLocation} />
            break
          case 'LONG_ANSWER':
            questionInput = <LongAnswerInput id={id} />
            break
          case 'RADIO_GRID':
            questionInput = <RadioGridInput id={id} />
            break
          case 'CHECKBOX_GRID':
            questionInput = <CheckboxGridInput id={id} />
            break
          case 'DROPDOWN':
            questionInput = <DropdownInput id={id} />
            break
          case 'LINEAR':
            questionInput = <LinearGrid id={id} />
            break
        }

        if (!questionInput) {
          return null
        }
        const myLabel = field.label.split(';');
        const fieldTitle = myLabel.length > 1 ? myLabel[1] : myLabel[0];
        return (
          <QuestionContainer key={id}>
            <QuestionLabel>
              {
                translate({
                  id: `${fieldTitle}`,
                })
              }
            </QuestionLabel>
            {questionInput}
            <QuestionHelp>{field.description}</QuestionHelp>
          </QuestionContainer>
        )
      })}
    </div>
  )
}

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const methods = useGoogleForm({ form })
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data)
    alert(
      translate({
        id: "component.feedback.complete",
        message: "피드백 전송을 완료합니다.",
        description: "complete sending feedback!",
      })
    );
    setModalOpen(false);
  }

  // console.log('>>> Here are the errors!!!', methods.formState.errors)

  return (
    <>
      <div className={styles.btnwrapper}>
        <button className={styles.modalopenbtn} onClick={() => setModalOpen(true)}>
          {
            translate({
              id: "components.feedback.sendfeedback",
              message: "피드백",
              description: "send feedback",
            })
          }
        </button>
      </div>
      {
        modalOpen &&
        <div className={styles.modalcontainer} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={styles.modalcontent}>
            <button className={styles.modalclosebtn} onClick={() => setModalOpen(false)}>
              <CloseBtn/>
            </button>
            <GoogleFormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(onSubmit)}>
                {form.title && (
                  <>
                    <h1 className={styles.h1Title}>
                      {
                        translate({
                          id: "components.feedback.sendfeedbackTitle",
                          message: "피드백",
                          description: "send feedback",
                        })
                      }
                    </h1>
                    {form.description && (
                      <p style={{ fontSize: '.8rem' }}>{form.description}</p>
                    )}
                  </>
                )}
                <Questions />
                <p className={styles.emaildesc}>
                  {
                    translate({
                      id: "components.feedback.emaildesciption",
                      message: "이메일은 귀하의 피드백에 대한 후속 답변을 위해서만 사용할 뿐 수집하지 않습니다.",
                      description: "We'll only use this email for follow-up questions about your feedback."
                    })
                  }
                </p>
                <button type='submit' className={styles.submitbtn}>
                  {
                  translate({
                    id: "components.feedback.submit",
                    message: "제출하기",
                    description: "Submit a survey",
                    })
                  }
                </button>
              </Form>
            </GoogleFormProvider>
          </div>
        </div>
      }
    </>
  );
};

export default App;