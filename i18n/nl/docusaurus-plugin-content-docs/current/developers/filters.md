---
sidebar_position: 2
---

# Filters

### kudos_payment_description

Met deze filter kun je de tekst wijzigen die wordt gebruikt voor de betalingsomschrijving.

:::warning

De betalingsomschrijving **moet** uniek zijn voor elke donatie, dus zorg ervoor dat je altijd de **order_id** opneemt.

:::

```php title="functions.php"
function kudos_filter_description( $original_text, $frequency_text, $order_id, $campaign_name ) {
    return sprintf( 'Donatie (%1$s) - %2$s - %3$s', $frequency_text, $campaign_name, $order_id );
}
add_filter( 'kudos_payment_description', 'kudos_filter_description', 10, 4 );
```

### kudos_receipt_attachment

Wordt gebruikt om bijlagen toe te voegen of te wijzigen in ontvangstbewijs-e-mails.

```php title="functions.php"
function kudos_filter_attachments( array $attachments, int $transaction_id ) {
    $attachments[] = '/pad/naar/bijlage.pdf';
    return $attachments;
}
add_filter( 'kudos_receipt_attachment', 'kudos_filter_attachments', 10, 2 );
```

### kudos_invoice_company_name

Wijzigt de bedrijfs-/websitenaam die wordt weergegeven in de voettekst van de factuur en het e-mailontvangstbewijs. Standaard is dit `get_bloginfo( 'name' )`.

```php title="functions.php"
function kudos_filter_company_name( string $name ) {
    return 'Mijn Goede Doel Naam';
}
add_filter( 'kudos_invoice_company_name', 'kudos_filter_company_name' );
```

### kudos_frequency_options

Hiermee kun je de beschikbare opties aanpassen bij het kiezen van de betaalfrequentie voor terugkerende betalingen.

:::info

Je kunt geen nieuwe opties aan deze lijst toevoegen, alleen verwijderen. Mogelijke opties: `12 months`, `3 months` en `1 month`.

:::

```php title="functions.php"
function kudos_change_frequency_options( array $options ) {
    unset($options['12 months']); // Jaarlijks uitschakelen.
    unset($options['3 months']); // Per kwartaal uitschakelen.
    return $options;
};
add_filter('kudos_frequency_options', 'kudos_change_frequency_options');
```