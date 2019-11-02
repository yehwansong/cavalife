
$( document ).ready(function() {
    var hashnum = parseInt(window.location.hash.split('#')[1], 10)
// if(hashnum == 3){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/3_1_1.jpg")'></div><div style='background-image : url("artwork_image/3_1_2.jpg")'></div><div style='background-image : url("artwork_image/3_1_3.jpg")'></div><div style='background-image : url("artwork_image/3_1_4.jpg")'></div><div style='background-image : url("artwork_image/3_1_5.jpg")'></div><div style='background-image : url("artwork_image/3_1_6.jpg")'></div>	</div><div class='img img_2'><div style='background-image : url("artwork_image/3_2_1.jpg")'></div><div style='background-image : url("artwork_image/3_2_2.jpg")'></div><div style='background-image : url("artwork_image/3_2_3.jpg")'></div>	</div>`)
// }
// if(hashnum == 6){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/6_1_1.jpg")'></div><div style='background-image : url("artwork_image/6_1_2.jpg")'></div><div style='background-image : url("artwork_image/6_1_3.jpg")'></div><div style='background-image : url("artwork_image/6_1_4.jpg")'></div><div style='background-image : url("artwork_image/6_1_5.jpg")'></div><div style='background-image : url("artwork_image/6_1_6.jpg")'></div><div style='background-image : url("artwork_image/6_1_7.jpg")'></div>	</div><div class='img img_2'><div style='background-image : url("artwork_image/6_2_1.jpg")'></div><div style='background-image : url("artwork_image/6_2_2.jpg")'></div><div style='background-image : url("artwork_image/6_2_3.jpg")'></div><div style='background-image : url("artwork_image/6_2_4.jpg")'></div>	</div>`)
// }
// if(hashnum == 8){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/8_1_1.jpg")'></div><div style='background-image : url("artwork_image/8_1_2.jpg")'></div>	</div>`)
// }
// if(hashnum == 9){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/9_1_1.jpg")'></div><div style='background-image : url("artwork_image/9_1_2.jpg")'></div><div style='background-image : url("artwork_image/9_1_3.jpg")'></div><div style='background-image : url("artwork_image/9_1_4.jpg")'></div><div style='background-image : url("artwork_image/9_1_5.jpg")'></div><div style='background-image : url("artwork_image/9_1_6.jpg")'></div><div style='background-image : url("artwork_image/9_1_7.jpg")'></div>	</div><div class='img'><div style='background-image : url("artwork_image/9_2_1.jpg")'></div><div style='background-image : url("artwork_image/9_2_2.jpg")'></div><div style='background-image : url("artwork_image/9_2_3.jpg")'></div><div style='background-image : url("artwork_image/9_2_4.jpg")'></div><div style='background-image : url("artwork_image/9_2_5.jpg")'></div>	</div><div class='img'><div style='background-image : url("artwork_image/9_3_1.jpg")'></div><div style='background-image : url("artwork_image/9_3_2.jpg")'></div>	</div><div class='img img_2'><div style='background-image : url("artwork_image/9_4_1.jpg")'></div><div style='background-image : url("artwork_image/9_4_2.jpg")'></div>	</div>`)
// }
// if(hashnum == 10){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/10_1_1.jpg")'></div><div style='background-image : url("artwork_image/10_1_2.jpg")'></div><div style='background-image : url("artwork_image/10_1_3.jpg")'></div><div style='background-image : url("artwork_image/10_1_4.jpg")'></div>	</div><div class='img img_2'><div style='background-image : url("artwork_image/10_2_1.jpg")'></div><div style='background-image : url("artwork_image/10_2_2.jpg")'></div>	</div>`)
// }
// if(hashnum == 23){  
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/23_1_1.jpg")'></div><div style='background-image : url("artwork_image/23_1_2.jpg")'></div><div style='background-image : url("artwork_image/23_1_3.jpg")'></div><div style='background-image : url("artwork_image/23_1_4.jpg")'></div>	</div>`)
// }
// if(hashnum == 35){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/35_1_1.jpg")'></div><div style='background-image : url("artwork_image/35_1_2.jpg")'></div><div style='background-image : url("artwork_image/35_1_3.jpg")'></div><div style='background-image : url("artwork_image/35_1_4.jpg")'></div><div style='background-image : url("artwork_image/35_1_5.jpg")'></div><div style='background-image : url("artwork_image/35_1_6.jpg")'></div><div style='background-image : url("artwork_image/35_1_7.jpg")'></div><div style='background-image : url("artwork_image/35_1_8.jpg")'></div><div style='background-image : url("artwork_image/35_1_9.jpg")'></div><div style='background-image : url("artwork_image/35_1_10.jpg")'></div><div style='background-image : url("artwork_image/35_1_11.jpg")'></div>	</div><div class='img img_2'><div style='background-image : url("artwork_image/35_2_1.jpg")'></div><div style='background-image : url("artwork_image/35_2_2.jpg")'></div><div style='background-image : url("artwork_image/35_2_3.jpg")'></div><div style='background-image : url("artwork_image/35_2_4.jpg")'></div><div style='background-image : url("artwork_image/35_2_5.jpg")'></div><div style='background-image : url("artwork_image/35_2_6.jpg")'></div><div style='background-image : url("artwork_image/35_2_7.jpg")'></div><div style='background-image : url("artwork_image/35_2_8.jpg")'></div><div style='background-image : url("artwork_image/35_2_9.jpg")'></div><div style='background-image : url("artwork_image/35_2_10.jpg")'></div><div style='background-image : url("artwork_image/35_2_11.jpg")'></div><div style='background-image : url("artwork_image/35_2_12.jpg")'></div><div style='background-image : url("artwork_image/35_2_13.jpg")'></div><div style='background-image : url("artwork_image/35_2_14.jpg")'></div><div style='background-image : url("artwork_image/35_2_15.jpg")'></div><div style='background-image : url("artwork_image/35_2_16.jpg")'></div><div style='background-image : url("artwork_image/35_2_17.jpg")'></div><div style='background-image : url("artwork_image/35_2_18.jpg")'></div><div style='background-image : url("artwork_image/35_2_19.jpg")'></div><div style='background-image : url("artwork_image/35_2_20.jpg")'></div><div style='background-image : url("artwork_image/35_2_21.jpg")'></div><div style='background-image : url("artwork_image/35_2_22.jpg")'></div><div style='background-image : url("artwork_image/35_2_23.jpg")'></div>	</div><div class='img img_3'><div style='background-image : url("artwork_image/35_3_1.jpg")'></div><div style='background-image : url("artwork_image/35_3_2.jpg")'></div>	</div>`)
// }
// if(hashnum == 37){
// 	$('#imgbox').append(`<div class='img img_1'><div style='background-image : url("artwork_image/37_1_1.jpg")'></div><div style='background-image : url("artwork_image/37_1_2.jpg")'></div><div style='background-image : url("artwork_image/37_1_3.jpg")'></div><div style='background-image : url("artwork_image/37_1_4.jpg")'></div><div style='background-image : url("artwork_image/37_1_5.jpg")'></div><div style='background-image : url("artwork_image/37_1_6.jpg")'></div>	</div>`)
// }



if(hashnum == 1){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/1_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/1_1_2.jpg")'></div>
</div>
`)}
if(hashnum == 2){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/2_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/2_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/2_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/2_1_4.jpg")'></div>
<div style='background-image : url("artwork_image/2_1_5.jpg")'></div>
<div style='background-image : url("artwork_image/2_1_6.jpg")'></div>
</div>
`)}
if(hashnum == 3){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/3_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/3_1_2.jpg")'></div>
</div>
`)}
if(hashnum == 4){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/4_1_6.jpg")'></div>
<div style='background-image : url("artwork_image/4_1_7.jpg")'></div>
</div>
<div class='img img_2'>
<div style='background-image : url("artwork_image/4_2_1.jpg")'></div>
<div style='background-image : url("artwork_image/4_2_2.jpg")'></div>
<div style='background-image : url("artwork_image/4_2_3.jpg")'></div>
</div>
<div class='img img_3'>
<div style='background-image : url("artwork_image/4_3_1.jpg")'></div>
<div style='background-image : url("artwork_image/4_3_2.jpg")'></div>
</div>
`)}
if(hashnum == 5){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/5_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/5_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/5_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/5_1_4.jpg")'></div>
<div style='background-image : url("artwork_image/5_1_5.jpg")'></div>
<div style='background-image : url("artwork_image/5_1_6.jpg")'></div>
<div style='background-image : url("artwork_image/5_1_7.jpg")'></div>
</div>
`)}
if(hashnum == 6){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/6_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/6_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/6_1_3.jpg")'></div>
</div>
<div class='img img_2'>
<div style='background-image : url("artwork_image/6_2_1.jpg")'></div>
<div style='background-image : url("artwork_image/6_2_2.jpg")'></div>
<div style='background-image : url("artwork_image/6_2_3.jpg")'></div>
<div style='background-image : url("artwork_image/6_2_4.jpg")'></div>
</div>
`)}
if(hashnum == 7){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/7_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/7_1_2.jpg")'></div>
</div>
`)}
if(hashnum == 8){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/8_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/8_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/8_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/8_1_4.jpg")'></div>
<div style='background-image : url("artwork_image/8_1_5.jpg")'></div>
<div style='background-image : url("artwork_image/8_1_6.jpg")'></div>
<div style='background-image : url("artwork_image/8_1_7.jpg")'></div>
</div>
<div class='img img_2'>
<div style='background-image : url("artwork_image/8_2_1.jpg")'></div>
<div style='background-image : url("artwork_image/8_2_2.jpg")'></div>
<div style='background-image : url("artwork_image/8_2_3.jpg")'></div>
<div style='background-image : url("artwork_image/8_2_4.jpg")'></div>
<div style='background-image : url("artwork_image/8_2_5.jpg")'></div>
</div>
<div class='img img_3'>
<div style='background-image : url("artwork_image/8_3_1.jpg")'></div>
<div style='background-image : url("artwork_image/8_3_2.jpg")'></div>
</div>
<div class='img img_4'>
<div style='background-image : url("artwork_image/8_4_1.jpg")'></div>
<div style='background-image : url("artwork_image/8_4_2.jpg")'></div>
</div>
`)}
if(hashnum == 9){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/9_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/9_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/9_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/9_1_4.jpg")'></div>
</div>
`)}
if(hashnum == 10){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/10_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/10_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/10_1_3.jpg")'></div>
</div>
`)}
if(hashnum == 14){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/14_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_4.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_5.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_6.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_7.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_8.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_9.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_10.jpg")'></div>
<div style='background-image : url("artwork_image/14_1_11.jpg")'></div>
</div>
<div class='img img_2'>
<div style='background-image : url("artwork_image/14_2_1.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_2.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_3.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_4.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_5.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_6.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_7.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_8.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_9.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_10.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_11.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_12.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_13.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_14.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_15.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_16.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_17.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_18.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_19.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_20.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_21.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_22.jpg")'></div>
<div style='background-image : url("artwork_image/14_2_23.jpg")'></div>
</div>
<div class='img img_3'>
<div style='background-image : url("artwork_image/14_3_1.jpg")'></div>
<div style='background-image : url("artwork_image/14_3_2.jpg")'></div>
</div>
`)}
if(hashnum == 15){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/15_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/15_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/15_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/15_1_4.jpg")'></div>
<div style='background-image : url("artwork_image/15_1_5.jpg")'></div>
<div style='background-image : url("artwork_image/15_1_6.jpg")'></div>
</div>
`)}
if(hashnum == 18){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/18_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/18_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/18_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/18_1_4.jpg")'></div>
<div style='background-image : url("artwork_image/18_1_5.jpg")'></div>
<div style='background-image : url("artwork_image/18_1_6.jpg")'></div>
<div style='background-image : url("artwork_image/18_2_1.jpg")'></div>
<div style='background-image : url("artwork_image/18_2_2.jpg")'></div>
<div style='background-image : url("artwork_image/18_2_3.jpg")'></div>
<div style='background-image : url("artwork_image/18_2_4.jpg")'></div>
<div style='background-image : url("artwork_image/18_2_5.jpg")'></div>
</div>
`)}
if(hashnum == 23){
	$('#imgbox').append(`
<div class='img img_1'>
<div style='background-image : url("artwork_image/23_1_1.jpg")'></div>
<div style='background-image : url("artwork_image/23_1_2.jpg")'></div>
<div style='background-image : url("artwork_image/23_1_3.jpg")'></div>
<div style='background-image : url("artwork_image/23_1_4.jpg")'></div>
</div>
`)}
})