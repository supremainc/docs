"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["11353"], {
62059: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chat)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 79 modules
var Layout = __webpack_require__(25275);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(25895);
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 115 modules
var lib = __webpack_require__(91410);
// EXTERNAL MODULE: ./node_modules/remark-gfm/lib/index.js + 56 modules
var remark_gfm_lib = __webpack_require__(12816);
;// CONCATENATED MODULE: ./src/pages/chat/chat.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const chat_module = ({"chatPageContainer":"chatPageContainer_dIck","chatPageContent":"chatPageContent_HN5t","chatHeader":"chatHeader_LyIs","chatTitle":"chatTitle_IoxD","chatSubtitle":"chatSubtitle_MUGQ","chatMessagesContainer":"chatMessagesContainer_nf65","emptyState":"emptyState_dIcJ","emptyIcon":"emptyIcon_Rbsd","chatMessage":"chatMessage_yYEp","fadeIn":"fadeIn_KipN","userChatMessage":"userChatMessage_s8CU","assistantChatMessage":"assistantChatMessage_iXGd","chatMessageBubble":"chatMessageBubble_Va1Y","chatMarkdown":"chatMarkdown_D8EZ","chatSources":"chatSources_FBVH","similarity":"similarity_G8BR","loadingDots":"loadingDots_v9Kj","bounce":"bounce_Xh5f","chatInputForm":"chatInputForm_jCzV","chatInput":"chatInput_U7BD","chatSendButton":"chatSendButton_z83k"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(13341);
;// CONCATENATED MODULE: ./src/pages/chat/index.js








function ChatPage() {
    const { siteConfig: { customFields } } = (0,useDocusaurusContext/* ["default"] */.A)();
    const PROJECT_ID = 'gfyiunrxdmzfxmphkymr';
    const API_URL = `https://${PROJECT_ID}.functions.supabase.co/rag-chat`;
    const SUPABASE_SERVICE_ROLE_KEY = customFields.SUPABASE_SERVICE_ROLE_KEY || '';
    const [messages, setMessages] = (0,react.useState)([]);
    const [input, setInput] = (0,react.useState)('');
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const messagesEndRef = (0,react.useRef)(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0,react.useEffect)(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const handleSendMessage = async (e)=>{
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };
        const question = input;
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput('');
        setIsLoading(true);
        // 스트리밍 응답을 위한 임시 메시지 생성
        const assistantMessageId = (Date.now() + 1).toString();
        const assistantMessage = {
            id: assistantMessageId,
            role: 'assistant',
            content: '',
            sources: []
        };
        setMessages((prev)=>[
                ...prev,
                assistantMessage
            ]);
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
                },
                body: JSON.stringify({
                    question
                })
            });
            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            const data = await response.json();
            // 마크다운 형식의 답변
            const answer = data.answer || 'Sorry, I could not generate a response.';
            const sources = data.sources || [];
            // 메시지 업데이트
            setMessages((prev)=>prev.map((msg)=>msg.id === assistantMessageId ? {
                        ...msg,
                        content: answer,
                        sources
                    } : msg));
        } catch (error) {
            console.error('Error fetching response:', error);
            const errorMessage = 'Sorry, there was an error processing your request. Please try again.';
            setMessages((prev)=>prev.map((msg)=>msg.id === assistantMessageId ? {
                        ...msg,
                        content: errorMessage
                    } : msg));
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Head/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "BioStar X Documentation Assistant | Suprema Docs"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Use the BioStar X Documentation Assistant to get personalized answers and support based on your documentation needs."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: chat_module.chatPageContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: chat_module.chatPageContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: chat_module.chatHeader,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: chat_module.chatTitle,
                                    children: "\uD83D\uDCDA Documentation Assistant"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: chat_module.chatSubtitle,
                                    children: "Ask questions about our products and services"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: chat_module.chatMessagesContainer,
                            children: [
                                messages.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: chat_module.emptyState,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: chat_module.emptyIcon,
                                            children: "\uD83D\uDC4B"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            children: "Welcome to the Documentation Assistant"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Ask me anything about our products and services. I'll help you find the right information."
                                        })
                                    ]
                                }) : messages.map((message)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: `${chat_module.chatMessage} ${message.role === 'user' ? chat_module.userChatMessage : chat_module.assistantChatMessage}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: chat_module.chatMessageBubble,
                                                children: message.role === 'assistant' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: chat_module.chatMarkdown,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* .Markdown */.oz, {
                                                        remarkPlugins: [
                                                            remark_gfm_lib/* ["default"] */.A
                                                        ],
                                                        children: message.content
                                                    })
                                                }) : message.content
                                            }),
                                            message.sources && message.sources.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: chat_module.chatSources,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                        children: "\uD83D\uDCD6 Sources:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                        children: message.sources.map((source, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                        href: source.url,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        children: source.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: chat_module.similarity,
                                                                        children: [
                                                                            (source.similarity * 100).toFixed(1),
                                                                            "% match"
                                                                        ]
                                                                    })
                                                                ]
                                                            }, idx))
                                                    })
                                                ]
                                            })
                                        ]
                                    }, message.id)),
                                isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: `${chat_module.chatMessage} ${chat_module.assistantChatMessage}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: chat_module.loadingDots,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    ref: messagesEndRef
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSendMessage,
                            className: chat_module.chatInputForm,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Type your question here...",
                                    className: chat_module.chatInput,
                                    disabled: isLoading,
                                    autoFocus: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    type: "submit",
                                    className: chat_module.chatSendButton,
                                    disabled: isLoading || !input.trim(),
                                    "aria-label": "Send message",
                                    children: isLoading ? '⏳' : '→'
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* ESM default export */ const chat = (ChatPage);


}),

}]);