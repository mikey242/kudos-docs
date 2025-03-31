---
sidebar_position: 2
---

# Actions

---

### kudos_donations_upgraded

Wordt geactiveerd wanneer de plugin wordt bijgewerkt.

```php title="functions.php"
function kudos_on_upgrade( string $plugin ) {
    // Je eigen code hier.
}
add_action( 'kudos_donations_upgraded', 'kudos_on_upgrade' );
```


### kudos_submit_payment

Deze actie wordt uitgevoerd direct nadat een betaling is ingediend. Hiermee krijg je toegang tot de ingediende formuliergegevens.

```php title="functions.php"
function kudos_on_payment_submit( array $args ) {
    // Je eigen code hier.
}
add_action( 'kudos_submit_payment', 'kudos_on_payment_submit' );
```

### kudos_mailer_send

Deze actie wordt geactiveerd telkens wanneer de plugin een e-mail verzendt.

```php title="functions.php"
function kudos_on_email_send( string $to, string $subject, string $body, array $attachment ) {
    // Je eigen code hier.
}
add_action( 'kudos_mailer_send', 'kudos_on_email_send', 10, 4 );
```

### kudos_$\{vendor_name}_webhook_requested

Wordt geactiveerd wanneer de webhook van de huidige provider wordt opgevraagd. $vendor_name is de naam van de provider. In het onderstaande voorbeeld is dit `mollie`. Geeft toegang tot het WP_REST_Request-object.

```php title="functions.php"
function kudos_on_webhook_request( \WP_REST_Request $request ) {
    // Je eigen code hier.
}
add_action( 'kudos_mollie_webhook_requested', 'kudos_on_webhook_request' );
```

### kudos_transaction_$\{payment_status}

Wordt geactiveerd telkens wanneer de betalingsstatus van een transactie verandert naar de opgegeven status. $payment_status is de nieuwe status. In het onderstaande voorbeeld verandert de status naar `paid`.

```php title="functions.php"
function kudos_on_transaction_paid( int $transaction_id ) {
    // Je eigen code hier.
}
add_action( 'kudos_transaction_paid', 'kudos_on_transaction_paid' );
```

## Alleen voor gevorderd gebruik

:::warning

Deze acties zijn niet bedoeld voor extern gebruik en we ondersteunen het gebruik ervan momenteel niet.

:::

### kudos_container_ready

Wordt geactiveerd wanneer de container klaar is.
### kudos_donations_loaded

Wordt geactiveerd wanneer alle services zijn geladen.
### kudos_donations_activated

Wordt geactiveerd wanneer de plugin wordt geactiveerd.
### kudos_donations_deactivated

Wordt geactiveerd wanneer de plugin wordt gedeactiveerd.
### kudos_post_saved

Wordt geactiveerd wanneer een nieuwe Kudos-gerelateerde post (donateur, transactie, abonnement) wordt aangemaakt of bijgewerkt.