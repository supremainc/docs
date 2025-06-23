import OpenAI from 'openai';
import { ProxyAgent } from 'proxy-agent';
import { options } from './config';

export async function translate(content: string, targetLanguage: string) {
  const client = new OpenAI({
    baseURL: options.baseUrl,
    apiKey: options.apiKey,
    organization: options.organization,
    httpAgent: new ProxyAgent(),
  });
  // 한국어에서 영어 번역용 상세 지침
  const koreanToEnglishGuidelines = `
## Korean to English Translation Guidelines

### Avoid These English Expressions:
- "you can" → Use declarative statements (e.g., "The system allows..." instead of "You can...")
- "want" → Remove if unnecessary in context
- "display" → Use "appears" instead (e.g., "The message appears" not "displays")
- "There issue where" → Use factual descriptions (e.g., "The system fails to..." instead of "There is an issue where...")
- "An issue" → Avoid; use specific descriptions
- "even" → Avoid unnecessary usage
- "item" → Avoid; use specific terms

### Korean to English Preferred Translations:
- 얼굴 인식 → Facial Authentication (not Facial Recognition)
- 가능하게 하다 → enhance (not facilitate)
- 초기화 → initialize (not reset)
- 속도 → performance (not speed)
- 단자 → port (not terminal)
- 정상적으로 인식되는 → authenticates (not "correctly recognizes")
- 비정상적으로 다시 시작되었습니다 → restarts abnormally (not "has an abnormal restart")
- 다르게 표현된다 → incorrectly (not "differently")
- 복잡한 구조 → large data (not "complex structure")
- 일부 → certain (not "some")
- OSDP 연결 → connect via OSDP (not "OSDP connection")
- OSDP를 통해 연결을 시도하다 → attempting to connect via OSDP
- 로그나 이벤트 누락 → (events/logs) not getting uploaded
- 기능 → feature (not function/ability)
- ~로 출력됩니다 → outputs (not "is output as")
- 검색하다 → get (not retrieve)
- 수행하다 → performed (use only for mechanical/system actions, not human actions)
- 자격 증명 등록 → enroll credentials (not "register credentials")
- 설정 → Setting (not Configuration)

### Special Translation Rules:
- 막다/방지하다/못하게하다 → block
- 기록이 되지 않는다 → not logged
- When "support" appears at end of sentence, move to beginning when possible
- Korean "{장치명} 장치" → English "{device name}" (remove "device")
- Korean "{기능명} 기능" → English "{function name}" (remove redundant words)
- Korean "옵션 기능" → English "option" (remove "feature")
- Avoid developer terms: logic, register

### Credential Types (keep in English):
- fingerprint, face, visual face, card, QR/Barcode
`;

  const systemPrompt = targetLanguage === 'en' 
    ? `You are a professional technical translator specializing in Korean-to-English translation for security and access control documentation. 

${koreanToEnglishGuidelines}

Translate the Korean content to natural, professional English while strictly following these guidelines. Maintain technical accuracy and use declarative language. Return only the translated content without explanations.`
    : `You are a super translator which can help user to translate input content to ${targetLanguage}, please direct return the translation result, No nonsense.`;

  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      { role: 'user', content: content },
    ],
    model: options.model,
  });

  return {
    content: chatCompletion.choices[0].message.content ?? '',
    usage: chatCompletion.usage?.total_tokens ?? 0,
  };
}