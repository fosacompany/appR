function senddata(){
  var libelle = document.getElementById("libelle").value;
  var pays = document.getElementById("pays").value;
  var adresse = document.getElementById("adresse").value;
  var ville = document.getElementById("ville").value;
  var bp = document.getElementById("bp").value;
  var secteur = document.getElementById("secteur").value;
  var telephone = document.getElementById("telephone").value;
  var fax = document.getElementById("fax").value;
  var email = document.getElementById("email").value;
  var siteweb = document.getElementById("siteweb").value;
  $.ajax({
        type: "POST",
        url : "http://92.222.75.102/entreprise/index.php/api/v1/entreprise",
        data:{
             libelle:libelle,
             pays:pays,
             adresse:adresse
         },
         success: function() {
           window.open('templates/list.html');
         }
  });
}
function getdata(){
  $.ajax({
        type: "GET",
        url : "http://92.222.75.102/entreprise/index.php/api/v1/entreprise",
        success: function(data) {
          alert(data);
         }
  });
}
