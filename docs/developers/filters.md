---
sidebar_position: 2
---

# Filters

### kudos_payment_description

This filter allows you to change the text used for the payment description.

:::warning

The payment description **must** be unique to each donation, so ensure that you always include the **order_id**.

:::


```php title="functions.php"
function kudos_filter_description( $original_text, $frequency_text, $order_id, $campaign_name ) {
    return sprintf( 'Donation (%1$s) - %2$s - %3$s', $frequency_text, $campaign_name, $order_id );
}
add_filter( 'kudos_payment_description', 'kudos_filter_description', 10, 4 );
```

### kudos_receipt_attachment

Used to modify or add attachments to reciept emails.

```php title="functions.php"
function kudos_filter_attachments( array $attachments, int $transaction_id ) {
    $attachments[] = '/path/to/attachment.pdf';
    return $attachments;
}
add_filter( 'kudos_receipt_attachment', 'kudos_filter_attachments', 10, 2 );
```

### kudos_invoice_company_name

Change the company/website name displayed on the footer of the invoice and email reciept. Defaults to `get_bloginfo( 'name' )`.

```php title="functions.php"
function kudos_filter_company_name( string $name ) {
    return 'My Charity Name';
}
add_filter( 'kudos_invoice_company_name', 'kudos_filter_company_name' );
```
