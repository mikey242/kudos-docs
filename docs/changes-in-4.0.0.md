# Changes in v4.0.0

Version 4.0.0 is a major upgrade to Kudos Donations. The plugin has been re-written from the ground and contains a number of notable changes and improvements compared to the 3.x versions.

Among the many changes available, the most notable ones are that most settings are now set at the campaign level (as opposed to being global) and the the front end of the plugin is now rendered in a separate frame using React.

:::warning

If you have made customizations to Kudos Donations using CSS, these will not work anymore. Please read [here](#react) for more information.

:::

## Campaigns

![Campaigns](../static/img/campaigns.png)

In version 3.x the campaigns you created were found under the **Donations > Settings** menu under a campaigns tab. There is now a separate **Donations > Campaigns** menu which gives you an overview of your campaigns and allows you create, delete, duplicate and edit your campaigns.

Along with the customization available in the 3.x versions, you can now configure most of the other settings on a per-campaign basis (theme colour, return url, return message etc.).

Once you have configured your email and vendor settings, the **Campaigns** page is where you will spend most time configuring Kudos Donations.

## React

In order to minimize conflicts with other themes plugins, the Kudos Donations button and form are now rendered in its own frame. This means that the CSS and JavaScript for other themes or plugins will no longer be able to conflict with Kudos Donations and cause it look or work incorrectly.

A side effect of this is that if you have applied any CSS customizations to the way Kudos Donations looks and feels these will no longer work. In order to customize Kudos Donations you will now need to write your custom CSS in the **Custom CSS** tab under the campaign you would like to use it in.

![Campaigns](../static/img/customcss.png)

## PDF Invoices

Kudos Donations can now generates PDF invoices for successful donations. You can add your address and VAT number under **Donations > Settings > Invoice** which will be automatically added to each invoice.

If you have **Send email receipts** enabled (**Donations > Settings > Email**) a copy of this invoice will be attached to the email sent to the donor.
