<!-- views/profile.ejs -->
<!doctype html>
<html>
<head>
    <title>Alog Profile</title>
    <link href="css/main.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
    <link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body class="img">
<header>
    <div class="container">
            <nav>
                 <ul class="clearfix">
                    <li><a href="/logout" >Logout</a></li>
                </ul>
            </nav>
        
    </div>
</header>
<h1 class="pol">Alog</h1>
<div class="container">
            <nav>
                <ul class="clearfix">
                    <li><a id="profile" href="#">Profile</a></li>
                    <li><a id="profile3" href="#">Resources</a></li>
                </ul>
            </nav>
    <div id="overlays">         
        <div id="search-results"></div> 
    </div>
    <div id="overlay">  

            <!-- LOCAL INFORMATION -->
            <div>
                <div class="well">
                    <h3>User</h3>
                        <p>
                             <strong>email</strong>: <%= user.local.email %><br>
                        </p>
                        <table id="user" class="table table-bordered table-striped">
                                <tbody> 
                                    <tr>         
                                        <td width="35%">Name</td>
                                        <% if(user.username){ %>
                                            <td width="65%"><a href="#" id="username" data-type="text" data-pk="<%= user._id %>" data-url="/update-user-info" ><%=user.username%></a></td>
                                        <% } else { %>
                                            <td width="65%"><a href="#" id="username" data-type="text" data-pk="<%= user._id %>" data-url="/update-user-info" >Enter Your Name</a></td>
                                        <% } %>
                                    </tr>
                                    <tr>         
                                        <td>Condition</td>
                                        <% if(user.condition){ %>
                                            <td><a href="#" id="condition" data-type="text" data-pk="<%= user._id %>" data-placement="right" data-placeholder="Required" data-name"Enter your Condition" data-url="/update-user-info"><%=user.condition%></a></td>
                                        <% } else { %>
                                            <td><a href="#" id="condition" data-type="text" data-pk="<%= user._id %>" data-placement="right" data-placeholder="Required" data-name"Enter your Condition" data-url="/update-user-info">Enter your Condition</a></td>
                                        <% } %>
                                    </tr>  
                                    <tr>         
                                        <td>Do You See a Doctor or Therapist ?</td>
                                        <% if(user.dort){ %>
                                          <td><a href="#" id="dort" data-type="select" data-pk="<%= user._id %>" data-url="/update-user-info"><%=user.dort%></a></td>
                                        <% }  else { %>
                                                <td><a href="#" id="dort" data-type="select" data-pk="<%= user._id %>" data-url="/update-user-info"></a></td>
                                       <% }  %>
                                    </tr>
                                    <tr>         
                                        <td>Doctor email </td>
                                        <% if(user.email){ %>
                                            <td><a href="#" id="email" type="email" data-pk="<%= user._id %>" data-placement="right" data-placeholder="Required" data-url="/update-user-info"><%=user.email%></a></td>
                                        <% } else { %>
                                                <td><a href="#" id="email" type="email" data-pk="<%= user._id %>" data-placement="right" data-placeholder="Required" data-url="/update-user-info">Enter a email</a></td>
                                        <% }  %>
                                    </tr>   

                                     <tr>         
                                        <td>Therapist email </td>
                                        <% if(user.theemail){ %>
                                            <td><a href="#" id="theemail" type="email" data-pk="<%= user._id %>" data-placement="right" data-placeholder="Required" data-url="/update-user-info"><%=user.theemail%></a></td>
                                        <% } else { %>
                                                <td><a href="#" id="theemail" type="email" data-pk="<%= user._id %>" data-placement="right" data-placeholder="Required" data-url="/update-user-info">Enter a email</a></td>
                                        <% }  %>
                                    </tr>                                                                    
                                    <tr>         
                                        <td>Do You Take Medications?</td>
                                        <% if(user.meds){ %>
                                          <td><a href="#" id="meds" data-type="select" data-pk="<%= user._id %>" data-url="/update-user-info"><%=user.meds%></a></td>
                                        <% }  else { %>
                                                <td><a href="#" id="meds" data-type="select" data-pk="<%= user._id %>" data-url="/update-user-info"></a></td>
                                       <% }  %>
                                    </tr>
                                </tbody>
                            </table>
                        <a id="hello" class="close" href="#">SAVE</a>
                </div>
            </div>

    </div>
</div>           

<div class="container">
    <form id="logform" method="post" action="/logs-user" class="form-group">

        <input type="hidden" name="userid" value="<%= user._id %>"/>        
        <input type="hidden" class="userCondition" name="userCondition" value="<%= user.condition %>"/>        
    
        <div class="form-group">
            <label for="log" id="logH">Log</label>
            <div class="helper">
                <textarea class="form-control " id="log" name="log" rows="6" cols="150" maxlength="333" >
                </textarea>
            </div>
        </div> 

        <div class="form-group2">
            <p id="logc">Did you take any medications?</p>
            <input  type="radio" name="medsq" value="yes" id="medsqY"/>
            <label id="labels" for="medsqY">Yes</label>
            <input type="radio" name="medsq" value="no" id="medsqN"/>
            <label id="labels" for="medsqN">No</label>
        </div>
        <p><input class="bttn" type="submit" name="submit" value="Done"/></p>
    </form>
    <div id="logc" class="previous-logs">
        <h2>Previous Logs</h2>
        <% logs.map(function(log,i){ %>
            <p><%=log.created%> - <%=log.log%></p>
        <% }) %>
    </div>
</div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/js/bootstrap-editable.min.js"></script> 
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>

