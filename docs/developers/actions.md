---
sidebar_position: 2
---

# Actions

---

### kudos_donations_upgraded

Triggered when the plugin is upgraded.

```php title="functions.php"
function kudos_on_upgrade( string $plugin ) {
    // Your custom code here.
}
add_action( 'kudos_donations_upgraded', 'kudos_on_upgrade' );
```

### kudos_submit_payment

This action occurs immediately after a payment has been submitted. This action gives you access to the form data submitted.

```php title="functions.php"
function kudos_on_payment_submit( array $args ) {
    // Your custom code here.
}
add_action( 'kudos_submit_payment', 'kudos_on_payment_submit' );
```

### kudos_mailer_send

This action is triggered whenever an email is sent by the plugin.

```php title="functions.php"
function kudos_on_email_send( string $to, string $subject, string $body, array $attachment ) {
    // Your custom code here.
}
add_action( 'kudos_mailer_send', 'kudos_on_email_send', 10, 4 );
```

### kudos_$\{vendor_name}_webhook_requested

Triggered when the webhook for the current vendor is requested. $vendor_name is the name of the vendor and in the example below it is `mollie`. Gives access to the WP_REST_Request object.

```php title="functions.php"
function kudos_on_webhook_request( \WP_REST_Request $request ) {
    // Your custom code here.
}
add_action( 'kudos_mollie_webhook_requested', 'kudos_on_webhook_request' );
```

### kudos_transaction_$\{payment_status}

Triggered whenever the payment status for a transaction changes to the specified status. $payment_status is the new status, the example below shows this changing to `paid`.

```php title="functions.php"
function kudos_on_transaction_paid( int $transaction_id ) {
    // Your custom code here.
}
add_action( 'kudos_transaction_paid', 'kudos_on_transaction_paid' );
```

## Advanced use only

:::warning

These actions are not intended for external use and we do not currently support using them.

:::

### kudos_container_ready

This action is triggered when the container is ready.
### kudos_donations_loaded

This action is triggered when all services are ready.
### kudos_donations_activated

This action is triggered when the plugin is activated.

### kudos_donations_deactivated

This action is triggered when the plugin is de-activated.

### kudos_post_saved

This action is triggered when a new Kudos related post (donor, transaction, subscription) is either created or updated.