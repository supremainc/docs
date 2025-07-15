# Federated Sites

## Overview

BioStar Air provides the capability to create**federated sites**, allowing a primary site to manage multiple sub-sites seamlessly. This feature is ideal for multi-tenant buildings or multi-branch organizations, offering centralized control with distributed access management.

## What Are Federated Sites?

Federated sites enable a hierarchical structure where a**primary site**oversees one or more**sub-sites**. Administrators on the primary site, known as**Federated Admins**, can access and manage sub-sites directly through the BioStar Air interface.

## Why Use Federated Sites?

Federated sites are beneficial in the following scenarios:

### 1. Multi-Tenant Buildings

For example, in a commercial building with different companies occupying each floor, you can establish:

* A**master account**for the building.
* **Sub-accounts**for each tenant company.

This setup ensures only authorized employees access specific floors while simplifying management for the building administrator.

### 2. Multi-Branch Organizations

For companies with offices in multiple locations, you can set up:

* A**master account**to manage global settings.
* **Sub-accounts**for each branch.

For instance, a business with 10 offices worldwide can use a federated structure to streamline administration.

## How to Set Up Federated Sites

### Step 1: Access the Partner Portal

* The Airfob Partner Portal is exclusively available to partners and installers.
* End customers must contact their installer to configure this feature.

### Step 2: Create the Primary Site

1. Log in to the**Partner Portal**.
2. Click**Create Site**and select**Federation Site**under the**Site Profile**.
   * This step**must**be done when setting up a site for the first time.
   * Regular sites cannot be changed into federated sites later.
3. Add**Federated Admins**on the same screen.
   * **Federated Admins**(added in the Partner Portal) have access to the primary site and all sub-sites.
   * **Regular Admins**(added in BioStar Air) only manage individual sites.

### Step 3: Add Sub-Sites

1. Once the primary site is set up as a federated site, the**Site List**will display an option to create sub-sites.
2. Click**Create Sub-Site**and configure it as you would any other site.

## Important Considerations

### User and Reader Management

* Users and readers must be added separately to each sub-site.
* Readers can only be registered to one site at a time—either the primary site or a sub-site.

### Primary Site Usage

* Some customers use the primary site solely as an access point for managing sub-sites, without registering users or readers to the primary site.
* \*\*Example 1:\*\*A company with three branch offices sets up a primary site with no devices and creates sub-sites for each branch.
* \*\*Example 2:\*\*A company with a headquarters and three branches registers users and readers at the headquarters (primary site) and sets up sub-sites for the branches.

### Billing

* Billing is calculated based on the number of registered devices (readers) per site.
* There is no additional cost for creating a primary site without registered devices.

By utilizing the Federated Sites feature in BioStar Air, administrators can effectively manage access for complex environments, ensuring a secure, scalable, and streamlined experience for all stakeholders.
