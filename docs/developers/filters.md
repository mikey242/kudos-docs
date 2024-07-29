---
sidebar_position: 2
---

# Filters

## kudos_payment_description

This filter allows you to change the text used for the payment description.

:::warning

The payment description **must** be unique to each donation, so ensure that you always include the **order_id**.

:::


```php title="functions.php"
function kudos_filter_description( $original_text, $frequency_text, $order_id ) {
    return sprintf( 'Donation (%1$s) - %2$s', $frequency_text, $order_id );
}
add_filter( 'kudos_payment_description', 'kudos_filter_description', 10, 3 );
```