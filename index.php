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

////----------------twig-----------------------------------------------------
$app->register(new Silex\Provider\TwigServiceProvider(), 
	       array('twig.path' => '.',));
$app->register(new Silex\Provider\TranslationServiceProvider(), array(
    'locale_fallbacks' => array('fr'),
));
////----------------translation-----------------------------------------------------
use Symfony\Component\Translation\Loader\YamlFileLoader;

$app['translator'] = $app->share($app->extend('translator', function($translator, $app) {
    $translator->addLoader('yaml', new YamlFileLoader());

    $translator->addResource('yaml', __DIR__.'/locales/en.yml', 'en');
    $translator->addResource('yaml', __DIR__.'/locales/do.yml', 'do');
    $translator->addResource('yaml', __DIR__.'/locales/fr.yml', 'fr');

    return $translator;
}));

// Maintenant on démontre l'utilisation des templates Twig
// On commence par charger le moteur de templating
$app->register(new Silex\Provider\TwigServiceProvider(), 
	       array('twig.path' => '.',));

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
   $titre='Accueil';
    return $app['twig']->render('web/index.html', array('title' => $titre));
  });



// On définit une route qui répond à tout url de la forme /blabla
// en répondant Hello blabla
$app->get('/{nomuser}', function(Application $app,$nomuser) {
  
  return $nomuser;
  });

// On lance l'application
$app->run();

?>
