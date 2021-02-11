<?php
/*
* Set page
*/
$page = (empty($_GET['p'])) ? 'home' : $_GET['p'];

/*
* Set redirect where needed
*/
if (empty($_GET['p'])){
    if(!file_exists('pages/'.$page .'.php')) { 
        header('Location: /'); 
    }
}else{
    if(!file_exists('pages/'.$page .'.php')) { 
        header('Location: https://fe-project.dennis.ego.nxtmediatech.eu/404'); 
    }
}

include('pages/'.$page.'.php');


