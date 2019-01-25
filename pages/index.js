import React from 'react';
import Head from 'next/head';
// import '../public/css/main.css';


export default class Index extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Head>
                    <title>Alog</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                </Head>
                <div>
                <header>
                            <nav>
                                 <ul class="clearfix">
                                    <li><a id="profile2" href="#">About</a></li>
                                </ul>
                            </nav>
                                <div id="overlay"> 
                                    <p id="par">Alog allow you to keep a log of events to share with your doctor or therapist.
                                    It sends encrypted emails every week to your doctor or therapist with all the logs you did for that week. Making treatment more simple. 

                                    Keeps track of medications, gives resources for education on condition or illness. As well as providing videos for instant tools to handle a situation or problem you encounter.</p>
                                            <a id="holla" class="close" href="#">Back to Alog</a>
                                    
                                </div>

                </header>
                <div class="container">

                    <div id="overwrite" class="jumbotron text-center">
                        <h1>Welcome To Alog</h1>

                        <p>Login or Register with:</p>

                        <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
                        <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
                    </div>
                    <div id="overwrite2">
                        <h2 class="text-center"> Alog a place to log your progress</h2>
                            <p class="text-center">Alog allows you to create a daily log to share with your Doctor or Therapist!</p>
                    </div>

                </div>
                <footer>
                    <ul class="list">
                        <li class="soclial"></li>
                        <li class="soclial"></li>
                        <li class="soclial"></li>
                    </ul>     
                </footer>

                </div>
            </React.Fragment>
        );
    }
}


