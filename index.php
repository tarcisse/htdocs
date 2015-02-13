<?php

// On charge le framework Silex
require_once 'vendor/autoload.php';

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
////----------------------------bdd------------------

/*
 *fin inclusion module
 */
 
 
 
 /*--------------------------------------------------------------------------------------------------------------------------------------*/
 //                                                                                                                                      //
 //                                               DEBUT DES ROUTES                                                                       //
 //                                                                                                                                      //
 /*--------------------------------------------------------------------------------------------------------------------------------------*/
// On définit une route pour l'url /
$app->get('/', function(Application $app) {
  
    return $app['twig']->render('web/index.html');
});
 
// On lance l'application
$app->run();

?>
