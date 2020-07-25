<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/fbmessenger','Facebook chat');?></h1>

<ul>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('fbmessenger/list')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/fbmessenger','Facebook pages');?></a></li>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('fbmessenger/bbcode')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','BBCode');?></a></li>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('fbmessenger/leads')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Leads');?></a></li>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('fbmessenger/notifications')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Notifications');?></a></li>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('fbmessenger/options')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Options');?></a></li>
    <?php
    $user = erLhcoreClassModelFBMessengerUser::findOne(array('filter' => array('user_id' => erLhcoreClassUser::instance()->getUserID())));

    if (!($user instanceof erLhcoreClassModelFBMessengerUser)) {

        $fb = erLhcoreClassModelFBMessengerUser::getFBAppInstance();

        $helper = $fb->getRedirectLoginHelper();

        $permissions = ['email', 'manage_pages', 'pages_show_list', 'pages_messaging', 'pages_messaging_subscriptions']; // Optional permissions

        if (!class_exists('erLhcoreClassInstance')){
            $loginUrl = $helper->getReRequestUrl('https://'.$_SERVER['HTTP_HOST']. erLhcoreClassDesign::baseurl('fbmessenger/fbcallback'), $permissions);
        } else {
            //$loginUrl = $helper->getReRequestUrl('https://'.  erConfigClassLhConfig::getInstance()->getSetting('site','seller_subdomain') . '.' . erConfigClassLhConfig::getInstance()->getSetting('site','seller_domain') . erLhcoreClassDesign::baseurl('fbmessenger/fbcallbackinstance') /*. '?instance=' . erLhcoreClassInstance::getInstance()->id*/, $permissions);
            $time = time();
            $hash = sha1(erConfigClassLhConfig::getInstance()->getSetting('site','seller_secret_hash',false) . '_' . erConfigClassLhConfig::getInstance()->getSetting('site','seller_subdomain',false) . '_' .  erLhcoreClassInstance::getInstance()->id . '_' . erLhcoreClassUser::instance()->getUserID() . $time);
            $loginUrl = 'https://'.  erConfigClassLhConfig::getInstance()->getSetting('site','seller_subdomain',false) . '.' . erConfigClassLhConfig::getInstance()->getSetting('site','seller_domain',false) . erLhcoreClassDesign::baseurl('fbmessenger/fblogininstance') . '/' . erLhcoreClassInstance::getInstance()->id . '/' . erLhcoreClassUser::instance()->getUserID() . '/' . $time . '/' . $hash;
        }

        echo '<li><a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a></li>';
    } else {
        echo '
            <li><a href="' . erLhcoreClassDesign::baseurl('fbmessenger/myfbpages') . '">My pages</a></li>
            <li><a href="' . erLhcoreClassDesign::baseurl('fbmessenger/fblogout') . '">Logout</a></li>';
    }
    ?>
</ul>
