---
sidebar_position: 5
---

# Newsletter Integration

The **Newsletter Integration** feature allows donors to opt in to your mailing list at the point of donation by showing a checkbox on the donation form.

---

## Overview

When a newsletter provider is configured and a donor checks the opt-in checkbox, Kudos Donations Plus will automatically subscribe them to your mailing list after a successful donation.

## Supported providers

- [Brevo](https://www.brevo.com/)
- [EmailOctopus](https://emailoctopus.com/)
- [MailPoet](https://www.mailpoet.com/)
- [Mailchimp](https://mailchimp.com/)
- [MailerLite](https://www.mailerlite.com/)

## Setup

1. Go to **Kudos Donations → Settings → Newsletter**.
2. Select your **Newsletter vendor** from the dropdown.
3. Click **Apply change** to save your vendor selection.
4. Enter the API credentials required by your chosen provider (these appear after the vendor is applied).
5. Optionally customise the **Checkbox text** shown to donors on the form.
6. Save your settings.

## Checkbox text

The text shown next to the opt-in checkbox defaults to *"I would like to subscribe to the newsletter"*. You can change this to match your own wording in the **Checkbox text** field.

## Provider-specific configuration

Each provider requires its own API credentials. After selecting and applying a provider, the relevant fields will appear in the settings panel. Refer to your provider's documentation for details on where to find your API key or list ID.

### Brevo

Requires a **Brevo API key** and a **List ID** to identify which list subscribers are added to.

### EmailOctopus

Requires an **EmailOctopus API key** and a **List ID**.

### MailPoet

MailPoet is a self-hosted WordPress plugin. No external API key is needed; Kudos Donations Plus integrates directly with MailPoet if it is installed and active. Select the **MailPoet list** you want subscribers added to.

### Mailchimp

Requires a **Mailchimp API key** and an **Audience ID**.

### MailerLite

Requires a **MailerLite API key** and optionally a **Group ID** to add subscribers to a specific group.

## How subscriptions work

Subscriptions are processed asynchronously one minute after the donation is completed, using WordPress scheduled actions. This avoids adding latency to the payment flow.

:::note

The newsletter opt-in checkbox is only shown to donors when a provider is configured and active. If no provider is set the checkbox will not appear on the form.

:::