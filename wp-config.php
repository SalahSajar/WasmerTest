<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

if(strstr($_SERVER['SERVER_NAME'], 'pmwebmasters.xyz')){

	define( 'DB_NAME', 'pmwebmasters' ); /** Database Name */
	define( 'DB_USER', 'SalahSajar' ); /** Database username */
	define( 'DB_PASSWORD', 'Vampiresalah#1' ); /** Database password */
	define( 'DB_HOST', 'PMwebmasters' ); /** Database hostname */
} else {

	define( 'DB_NAME', 'pmwebmasters' );
	define( 'DB_USER', 'root' ); /** Database username */
	define( 'DB_PASSWORD', '' ); /** Database password */
	define( 'DB_HOST', 'localhost' ); /** Database hostname */
}

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';_~wJYpa@ym&Vprp0,L9Qhug$+LXbl4dBCm_{=l[Vz#{)>Hl52? &Pq!c5F,Z-JS' );
define( 'SECURE_AUTH_KEY',  'Yjv{G84K5_&,dm/tROOtQL9+T1K*?O>rCR]H#[OvEDkA 1hy%$9g+:1Vlz{d]#^h' );
define( 'LOGGED_IN_KEY',    '2qbbDYPVR{f^oro@V5O#r%PYm;<xu;.y|~rkJWIE^J[)^J?c:PHggSx<Y&w{R&|S' );
define( 'NONCE_KEY',        '9bPi.c<_1$hQ|H )Fd}GADv[UOE>($*axesJgae&&jJxevkeHxAT)xy[:sp41MO@' );
define( 'AUTH_SALT',        'Z[B%#TXZiZ$93itD0D6;!EKB{:T<K[%G+cwuW1I(wk3)KfF[?Z}ykXl*`7X+@J(G' );
define( 'SECURE_AUTH_SALT', 'vSfD$L?tcCMbXK]|gZ0$NeP1CE?DxR5&Zbvw9/dJt?cIean[_:s>Lm5+q58{]]iu' );
define( 'LOGGED_IN_SALT',   'gy4WDXux^2HmlMBv(=j:]2vDDf3 <Kz:P_VD28x.<*8hb=p!jaPK<yd!^c#wUZof' );
define( 'NONCE_SALT',       '#m7,,@~;j7Qgj?6@_Vq,_c[k/++bCe3[pc+$WD,-R&/:&[4kU,2bq}$!9DtE$slO' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
