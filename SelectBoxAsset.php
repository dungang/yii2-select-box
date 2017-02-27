<?php
namespace dungang\selectbox;

use yii\web\AssetBundle;

class SelectBoxAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/assets/select-box';
    public $js = ['select-box.js'];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}