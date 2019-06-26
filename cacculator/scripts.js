$(document).ready(function(){

$('.btn').click(function(){

$('#result').val($('#result').val()+$(this).val());
});
$('#b2').click(function(){

	$('#result').val('');
})
$('#b1').click(function(){

	$('#result').val(eval($('#result').val()));
})

});