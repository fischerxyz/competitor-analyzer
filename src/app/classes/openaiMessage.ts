export class OpenAiMessage{
    role: "function" | "user" | "system" | "assistant";
    content: string | null;
  
    constructor(role: "function" | "user" | "system" | "assistant", content: string | null ){
      this.role = role;
      this.content = content;
    }
}
  