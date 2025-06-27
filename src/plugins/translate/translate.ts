import OpenAI from 'openai';
import { ProxyAgent } from 'proxy-agent';
import { options } from './config';

export async function translate(content: string, targetLanguage: string, isDescription: boolean = false) {
  const client = new OpenAI({
    baseURL: options.baseUrl,
    apiKey: options.apiKey,
    organization: options.organization,
    httpAgent: new ProxyAgent(),
  });
  // 한국어에서 영어 번역용 핵심 지침
  const koreanToEnglishGuidelines = `
## Korean to English Translation Guidelines

### Core Translation Rules:
1. **Sentence Structure**: "To [목적], [행동]" → "[행동] to [목적]"
   - "To configure settings, click the button" → "Click the button to configure settings"

2. **Title Format**: 
   - Frontmatter title: Use title case (capitalize first letter of each word)
   - Body headings: Use sentence case (only first word + proper nouns capitalized)
   - Remove -ing form, use imperative

3. **Description Format**: Use sentence case (only first word + proper nouns capitalized)
   - "Learn How To Configure Settings" → "Learn how to configure settings"

4. **UI Elements**: Simplify button/element references
   - "Click the Save button" → "Click Save"
   - "Click the ... button" → "Click ..."

5. **Preserve Tags**: Never translate HTML tags, JSX components, or Markdown syntax
   - Keep <Image>, <IcFirst2>, ##, *, etc. exactly as-is

### Key Translations:
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

### Link Translation Rules:
- "[다음 문서]()" → "[following]()"
- "[다음 링크]()" → "[following link]()"
- "~~에 대한 자세한 내용은 [다음 문서]()를 참고하세요" → "For more information about ~~, refer to the [following]"
- Use "information on" instead of "information about" for technical procedures

### Credential Types (keep in English):
- fingerprint, face, visual face, card, QR/Barcode

### Avoid These:
- "you can" (use imperative instead)
- "please" (use direct imperative, except for system errors or user inconvenience)
- "display" (use "appears")
- "some" (use "certain")
- Title case in descriptions
`;

  const systemPrompt = targetLanguage === 'en' 
    ? `You are a professional Korean-to-English technical translator for security documentation.

${koreanToEnglishGuidelines}

**CRITICAL RULES:**
1. Restructure "To [목적], [행동]" → "[행동] to [목적]"
2. Convert -ing titles to imperative form
3. ${isDescription ? 'Use sentence case for descriptions (only first word + proper nouns capitalized)' : 'Use standard capitalization'}
4. Never translate HTML tags, JSX components, or Markdown syntax
5. Use imperative mood instead of "you can"

Return only the translation without explanations.`
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