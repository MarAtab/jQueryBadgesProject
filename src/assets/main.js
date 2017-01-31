$.ajax({
  url: 'https://www.codeschool.com/users/MarAtab',
  dataType:'jsonp'
  /*complete: function (){
    alert(this.url)

  },*/
  success: function(response) {

    response = {courses: completed=["The Cliffs of Value","Variable Valley","Files Falls","The Labyrinth of Loops","Conditional Canyon"]};

  }
});
