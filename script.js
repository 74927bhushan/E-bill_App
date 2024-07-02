// JavaScript form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('connectionForm');

    form.addEventListener('submit', function(event) {
        // Check all fields for validity
        const fields = form.querySelectorAll('input, select');
        fields.forEach(field => {
            if (!field.checkValidity()) {
                field.classList.add('is-invalid');
            } else {
                field.classList.remove('is-invalid');
            }
        });

        // If form is invalid, prevent submission
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
    });

    // Update billing address fields if same as meter address is checked
    const sameAsMeterAddress = document.getElementById('sameAsMeterAddress');
    sameAsMeterAddress.addEventListener('change', function() {
        const meterFields = [
            'plotFlatNo',
            'societyName',
            'streetLandmark',
            'district',
            'taluka',
            'village',
            'pincode'
        ];
        const billingFields = [
            'billingPlotFlatNo',
            'billingSocietyName',
            'billingStreetLandmark',
            'billingDistrict',
            'billingTaluka',
            'billingVillage',
            'billingPincode'
        ];

        if (sameAsMeterAddress.checked) {
            meterFields.forEach((field, index) => {
                document.getElementById(billingFields[index]).value = document.getElementById(field).value;
            });
        } else {
            billingFields.forEach(field => {
                document.getElementById(field).value = '';
            });
        }
    });
});
