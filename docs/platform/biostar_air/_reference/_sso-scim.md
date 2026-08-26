# Okta

## 1. Connect Okta SSO to BioStar Air

To connect Okta login to BioStar Air, the customer’s identity administrator needs to create an Okta OIDC application and connect it to the BioStar Air SSO settings.

### In Okta:

1.In Okta Admin Console, create a new OIDC application.
   * Go to: Applications → Applications → Create App Integration → OIDC
2. Select Web Application so Okta can provide a Client Secret.
3. Click "Next"

### In BioStar Air:
1. Go to: Admin Portal → Settings → Site → SSO & SCIM
2. Pick "Okta" as Identity Provider
3. Copy "Redirect URI" to a clipboard

### In Okta:

1. Fill in App integration name as "BioStar Air"
2. Paste the "Redirect URI" into "Sign-in redirect URIs" field
3. Allow users in the organization to access the application (Scroll down to "Assignments" tab → Controlled Access).
4. Click "Save"

### In Okta:

After creating the integration, you will see your application’s Cliend ID and Client Secret.(or go to: Applications → Applications → BioStar Air → General)

1. Copy Client ID and Client Secret
2. Copy Okta Domain

### In BioStar Air:
1. Enter Client ID, Client Secret and Okta Domain
2. Enter your organization’s email domain.
3. Click Save & Validate.

## 2. Connect Okta SCIM Provisioning to BioStar Air

### Okta setup

1.Add the SCIM provisioning application in Okta.
   * Go to: Applications → Browse App Catalog → Search "SCIM 2.0 Test App"→ Select "SCIM 2.0 Test App (Header Auth)"
2. Put BioStar Air SCIM in Application Label and click "Next"
3. No changes are required in "Sign-on options" page, after scrolling down, click "Done"
4. Open the Provisioning tab.
   * Go to:Applications → Applications → BioStar Air SCIM→ Provisioning
5. Click "Configure API integration → Enable API integration".

For the pushed groups to function properly, following attributes have to be enabled:
- Deactivate users
- Update User Attributes
- Create User

### In BioStar Air:

Go to:Admin Portal → Settings → Site → SSO & SCIM → SCIM Provisioning
1. Copy the SCIM Endpoint URL into "Base URL" field in Okta.
2. Generate a SCIM bearer token by clicking "Generate Token".
3. Copy the token immediately. You must copy it manually.
4. Paste bearer token as the API Token in Okta.
5. Click "Test API Credentials" to check if it syncronized successfully
6. Press "Save" in Okta

Important
The SCIM token is shown only once. If the token is lost, you must generate a new token by clicking "Rotate Token" button. Then paste the new token into Okta.

## 3. Push IdP groups to BioStar Air

User groups must first exist in the identity provider and be pushed to BioStar Air through SCIM.

### Okta setup
1. Assign users and groups to the SCIM application.
2. Enable provisioning actions:
- Create Users
- Update User
- Attributes
- Deactivate Users
3. Push groups from Okta to Biostar Air

## 4. Map IdP groups to BioStar Air groups
   After SSO and SCIM are connected and the groups are pushed into BioStar Air, the Site Administrator should map them.

Go to: Admin Portal → Settings → Site → SSO & SCIM → Group Mapping → Add

### Setup flow for User/Admin Groups
1. Click Add.
2. Select the IdP Group from Okta.
3. Select the Mapping Target
4. Select the local BioStar Air user group or Admin Role.
5. Save the mapping.

### Mapping rules
- More than 1 IdP group can be mapped to a local user group.
- BioStar Air user groups must be empty be mapped.
- BioStar Air groups with existing members cannot be selected.
- Only the Site Masters can manage IdP group mappings.
- Once IdP group mapped to a Master Role the role cannot be changed

## 5. Manage SCIM-synced users, groups, and admins

After provisioning is active, BioStar Air shows whether users, user groups, and admins are managed locally or synced from the identity provider.

### SCIM-managed behavior
- Existing manual users and admins stay manual.
- SCIM-synced entities cannot be deleted manually.
- Adding or removing users is not allowed for SCIM-synced groups.
- Local manual changes create an Override state.
- Release Override discards local changes and restores the entity to the SCIM-managed state.


# Entra ID

## 1. Connect Microsoft Entra ID SSO to BioStar Air

### In BioStar Air
1. Go to: Admin Portal → Settings → Site → SSO & SCIM
2. Select “Microsoft Entra ID”.
3. Copy the Redirect URI.

### In Microsoft Entra admin center
1. Go to: Entra ID → App registrations → New registration.
2. Name the app “BioStar Air”.
3. Choose “Accounts in this organizational directory only (Single tenant)”.
4. Under Redirect URI, select “Web” and paste the BioStar Air Redirect URI.
5. Click “Register”.

## 2. Collect Microsoft Entra app values
1. Open the “BioStar Air” app registration.
2. On Overview, copy:
   * Application (client) ID
   * Directory (tenant) ID
3. Go to: Certificates & secrets → Client secrets → New client secret.
4. Add a description and select an expiration.
5. Click “Add”.
6. Copy the secret Value immediately.

Use the Value, not the Secret ID. The Value is not displayed again.

## 3. Complete SSO connection

### In BioStar Air
1. Go to: Settings → Site → SSO & SCIM
2. Enter Client ID, Client Secret, Tenant ID and Email Domain.
3. Click Save & Validate.

### In Microsoft Entra admin center
1. Go to: Enterprise applications → BioStar Air → Users and groups.
2. Assign the Entra users or groups that may sign in as BioStar Air administrators.

Keep at least one BioStar Air Master Admin with local login before changing SSO settings.

## 4. Create Microsoft Entra SCIM provisioning app
Use a separate non-gallery enterprise application for SCIM.
1. Go to: Entra ID → Enterprise applications → New application.
2. Select “Create your own application”.
3. Enter “BioStar Air SCIM”.
4. Select “Integrate any other application you don’t find in the gallery (Non-gallery)”.
5. Click “Create”.
6. Open BioStar Air SCIM → Manage → Provisioning.
7. Set Provisioning Mode to “Automatic”.

## 5. Provision Microsoft Entra users and groups
Open: Enterprise applications → BioStar Air SCIM.
1. Go to Users and groups → Add user/group.
2. Assign the users and security groups to provision.
3. Go to Provisioning → Mappings.
4. Confirm both user and group synchronization are enabled.
5. Review matching attributes before changing them.
6. On the Provisioning overview page, click Start provisioning.

Start with a small test group. Group-membership changes can take up to about 40 minutes to reach BioStar Air.

## 6. Map IdP groups to BioStar Air groups
After SSO and SCIM are connected and the groups are pushed into BioStar Air, the Site Administrator should map them.

Go to: Admin Portal → Settings → Site → SSO & SCIM → Group Mapping → Add

### Setup flow for User/Admin Groups
1. Click Add.
2. Select the IdP Group from Entra.
3. Select the Mapping Target
4. Select the local BioStar Air user group or Admin Role.
5. Save the mapping.

### Mapping rules
* More than 1 IdP group can be mapped to a local user group.
* BioStar Air user groups must be empty be mapped.
* BioStar Air groups with existing members cannot be selected.
* Only the Site Masters can manage IdP group mappings.
* Once IdP group mapped to a Master Role the role cannot be changed

## 7. Manage SCIM-synced users, groups, and admins
After provisioning is active, BioStar Air shows whether users, user groups, and admins are managed locally or synced from the identity provider.

SCIM-managed behavior
* Existing manual users and admins stay manual.
* SCIM-synced entities cannot be deleted manually.
* Adding or removing users is not allowed for SCIM-synced groups.
* Local manual changes create an Override state.
* Release Override discards local changes and restores the entity to the SCIM-managed state.