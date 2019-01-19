// ensure that limit will not be overwrite

   // 0 - 50 venues
$('#limit').on('input', function () {

   let value = $(this).val();

   if (value !== '') {

      $(this).val(Math.max(Math.min(value, 50), 0));
   }
});

   // radius 500 - 5000
$('#radius').on('input', function () {

   let value = $(this).val();

   if (value !== '') {

      $(this).val(Math.max(Math.min(value, 5000), 500));
   }
});