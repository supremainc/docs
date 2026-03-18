"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["15903"], {
5443: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_api_user_management_mdx_e81_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-api-user-management-mdx-e81.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_api_user_management_mdx_e81_namespaceObject = JSON.parse('{"id":"platform/biostar_air/api-user-management","title":"Using the User Management API","description":"This guide explains how to create, update, and deactivate users using the BioStar Air API, outlines the recommended integration scope, and includes Python sample code.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/api-user-management.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/api-user-management","permalink":"/docs/es/platform/biostar_air/api-user-management","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/api-user-management.mdx","tags":[],"version":"current","frontMatter":{"id":"api-user-management","title":"Using the User Management API","description":"This guide explains how to create, update, and deactivate users using the BioStar Air API, outlines the recommended integration scope, and includes Python sample code.","keywords":["User Management","API","BioStar Air","Python sample code"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"API Authentication","permalink":"/docs/es/platform/biostar_air/api-authentication"},"next":{"title":"Troubleshooting","permalink":"/docs/es/platform/biostar_air/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/api-user-management.mdx


const frontMatter = {
	id: 'api-user-management',
	title: 'Using the User Management API',
	description: 'This guide explains how to create, update, and deactivate users using the BioStar Air API, outlines the recommended integration scope, and includes Python sample code.',
	keywords: [
		'User Management',
		'API',
		'BioStar Air',
		'Python sample code'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Recommended API integration scope",
  "id": "recommended-integration-scope",
  "level": 2
}, {
  "value": "User management API calls",
  "id": "user-management-api-calls",
  "level": 2
}, {
  "value": "Sample application",
  "id": "sample-application",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "After obtaining an authentication token, you can manage the user lifecycle through the API. Use endpoints to retrieve, create, update, and deactivate users to automate user management on your BioStar Air site."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-integration-scope",
      children: "Recommended API integration scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limit your API integration to the scope below whenever possible."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "User lifecycle management (create/update/delete)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Credential management (mobile, RF card, biometric)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allow administrators to continue using the existing BioStar Air web and mobile management apps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Access Level"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Schedules"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Door and device settings"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Site settings"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-management-api-calls",
      children: "User management API calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After logging in, use the following endpoints to manage users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getUsers"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "createUser"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "updateUser"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "suspendUsers"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always include a Bearer token in the Authorization header."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "To activate a user, assign at least one credential type."
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "e.g., RF card, mobile, LinkPass"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sample-application",
      children: "Sample application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following sample code is a Python app that uploads a CSV file via the API and bulk deactivates users."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        metastring: "title='Python'",
        children: "import requests\nimport csv\nimport getpass\nfrom pathlib import Path\n\ndef select_server():\n    servers = {\n        \"1\": (\"Demo\", \"https://demo-afs-api.airfob.com/v1\"),\n        \"2\": (\"Global\", \"https://a-afs-api.airfob.com/v1\"),\n        \"3\": (\"EU\", \"https://e-afs-api.airfob.com/v1\")\n    }\n\n    print(\"Please select a server:\")\n    for key, (name, _) in servers.items():\n        print(f\"{key}: {name}\")\n\n    choice = input(\"Enter server number: \").strip()\n    return servers.get(choice, (None, None))[1]\n\ndef login(base_url, username, password):\n    url = f\"{base_url}/login\"\n    payload = {\"username\": username, \"password\": password}\n    response = requests.post(url, json=payload)\n    response.raise_for_status()\n    data = response.json()\n    token = data.get(\"access_token\")\n    if not token:\n        raise ValueError(\"Login succeeded but no access_token returned.\")\n    print(\"✅ Login successful.\")\n    return token\n\ndef login_to_account(base_url, token, account_id):\n    url = f\"{base_url}/login/{account_id}\"\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n    response = requests.post(url, headers=headers)\n    response.raise_for_status()\n    new_token = response.json().get(\"access_token\")\n    if new_token:\n        print(f\"✅ Switched to account ID: {account_id}\")\n        return new_token\n    return token\n\ndef get_accounts(base_url, token):\n    url = f\"{base_url}/accounts/self\"\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n    response = requests.get(url, headers=headers)\n    response.raise_for_status()\n    accounts = response.json().get(\"accounts\", [])\n    return [{\"id\": acc[\"id\"], \"name\": acc[\"site\"][\"name\"]} for acc in accounts]\n\ndef suspend_users_from_csv(base_url, csv_path, token):\n    if not Path(csv_path).exists():\n        print(f\"❌ File not found: {csv_path}\")\n        return\n\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n\n    with open(csv_path, newline='', encoding='utf-8-sig') as f:\n        reader = csv.DictReader(f)\n\n        # Normalize headers\n        reader.fieldnames = [field.strip().lower() for field in reader.fieldnames]\n        if 'email' not in reader.fieldnames:\n            print(\"❌ Missing required 'email' column in CSV.\")\n            return\n\n        for row in reader:\n            email = row.get(\"email\")\n            if not email:\n                print(\"⚠️ Skipping row with missing email.\")\n                continue\n\n            # Search user\n            search_url = f\"{base_url}/users/search\"\n            payload = {\"filters\": [{\"field\": \"email\", \"equals\": email}]}\n            search_resp = requests.post(search_url, headers=headers, json=payload)\n            if search_resp.status_code != 200:\n                print(f\"❌ Failed to search user {email}: {search_resp.text}\")\n                continue\n\n            users = search_resp.json().get(\"users\", [])\n            if not users:\n                print(f\"❌ No user found with email: {email}\")\n                continue\n\n            user_id = users[0][\"id\"]\n\n            # Suspend user\n            suspend_url = f\"{base_url}/users/suspend\"\n            suspend_payload = {\n                \"ids\": [user_id],\n                \"certify_by\": \"none\",\n                \"use_site_template\": True\n            }\n            suspend_resp = requests.post(suspend_url, headers=headers, json=suspend_payload)\n            if suspend_resp.status_code == 200:\n                print(f\"✅ Suspended user: {email}\")\n            else:\n                print(f\"❌ Failed to suspend user {email}: {suspend_resp.text}\")\n\ndef main():\n    base_url = select_server()\n    if not base_url:\n        print(\"❌ Invalid selection. Exiting.\")\n        return\n\n    print(\"\\n🔑 BioStar Air Login\")\n    username = input(\"Email: \")\n    password = getpass.getpass(\"Password: \")\n\n    token = login(base_url, username, password)\n    accounts = get_accounts(base_url, token)\n\n    print(\"\\n🌐 Available Sites:\")\n    for i, acc in enumerate(accounts):\n        print(f\"{i}: {acc['name']} (ID: {acc['id']})\")\n\n    selected = int(input(\"\\nSelect site number to log into: \"))\n    account_id = accounts[selected][\"id\"]\n    token = login_to_account(base_url, token, account_id)\n\n    csv_path = input(\"Enter path to CSV file with user emails: \").strip()\n    suspend_users_from_csv(base_url, csv_path, token)\n\nif __name__ == \"__main__\":\n    main()\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
84429: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);