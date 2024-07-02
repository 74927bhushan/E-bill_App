<?php
// Validate CAPTCHA
$secretKey = "YOUR_SECRET_KEY";
$response = $_POST['g-recaptcha-response'];
$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = [
    'secret' => $secretKey,
    'response' => $response
];
$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    ]
];
$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$responseKeys = json_decode($result, true);

if ($responseKeys["success"]) {
    // CAPTCHA verified - process payment
    $accountNumber = $_POST['accountNumber'];
    $upiOption = $_POST['upiOption'];
    // Process payment logic goes here
    // Redirect or display success message
    echo "Payment processed successfully!";
} else {
    // CAPTCHA verification failed
    echo "CAPTCHA verification failed!";
}
?>
