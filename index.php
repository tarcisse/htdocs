<?php

//die($_SERVER['REMOTE_ADDR']);


if(isset($_GET['vendre']))
{
   if($_GET['vendre']=='du reve')
   {
    
   }
   else{
    header('location:http://soulnbeauty.be/progress/index.html');
   }
}
else
{
     //die("authentication failed  your ip is:".$_SERVER['REMOTE_ADDR']);
     header('location:http://soulnbeauty.be/progress/index.html');
}
// On charge le framework Silex
require_once 'vendor/autoload.php';
use Symfony\Component\HttpFoundation\Request;

// On définit des noms utiles
use Silex\Application;

// On crée l'application et on la configure en mode debug
$app = new Application();
$app['debug'] = true;

 /*
 *inclusion de module
 */

////------------------------session---------------------------------------
$app->register(new Silex\Provider\SessionServiceProvider());
if(isset($_GET['lang']))
{
    $app['session']->set('lang',$_GET['lang']);
    
}

if(! $app['session']->get('lang'))
{
   $app['session']->set('lang','fr');
}

////----------------twig-----------------------------------------------------
$app->register(new Silex\Provider\TwigServiceProvider(), 
	       array('twig.path' => '.',));
$app->register(new Silex\Provider\TranslationServiceProvider(), array(
    'locale_fallbacks' => array( $app['session']->get('lang')),
));
////----------------translation-----------------------------------------------------
use Symfony\Component\Translation\Loader\YamlFileLoader;

$app['translator'] = $app->share($app->extend('translator', function($translator, $app) {
    $translator->addLoader('yaml', new YamlFileLoader());

    $translator->addResource('yaml', __DIR__.'/locales/en.yml', 'en');
    $translator->addResource('yaml', __DIR__.'/locales/nl.yml', 'nl');
    $translator->addResource('yaml', __DIR__.'/locales/fr.yml', 'fr');

    return $translator;
}));
////----------------------------variable global------------------
$page=array();
$page['titre']='';
$page['description']='';
$page['key']='';


/*
 *fin inclusion module
 */
 
 
 
 /*--------------------------------------------------------------------------------------------------------------------------------------*/
 //                                                                                                                                      //
 //                                               DEBUT DES ROUTES                                                                       //
 //                                                                                                                                      //
 /*--------------------------------------------------------------------------------------------------------------------------------------*/
// On définit une route pour l'url /
$app->get('/', function(Application $app , Request $req) {
    global $page;
    $page['titre']='SOUL & BEAUTY';
    $page['description']='ACCUEIL';
    $page['key']='';
    if($req->query->get('scroll'))
       {
	$page['scroll']=$req->query->get('scroll');
       }
    
  //return print_r($page);
    return $app['twig']->render('index.html',array('page'=>$page));
});
 
 /*
  *photo url
  *
  */
 $app->get('/photo', function(Application $app) {
    global $page;
    $page['titre']='PHOTOS';
    $page['description']='';
    $page['key']='';
    
    return $app['twig']->render('photo.html',array('page'=>$page));
});
 /*
  *videos
  *
  */
 $app->get('/video', function(Application $app) {
    global $page;
    $page['titre']='VIDEOS';
    $page['description']='';
    $page['key']='';
    
    return $app['twig']->render('video.html',array('page'=>$page));
});
 
// On lance l'application
$app->run();

?>
