<?php 
	define('TOKEN',"TOKEN");
	define("WEBSITE","https://api.telegram.org/bot".TOKEN);
	define('DIR','./logs/');
	define('FILE',DIR.'webhookCV.log');

	$update = file_get_contents("php://input");
	$fecha = date('Y-m-d H:i:s');
	
	if (!is_dir(DIR)) {
		mkdir(DIR, 0777, true);
	}
	
	if (!file_exists(FILE)) {
		$fh = fopen(FILE, 'w');
		fclose($fh);
	}
	
	$updateData = json_decode($update, true);
	$logMessage = $fecha . ' - ' . print_r($updateData, true) . PHP_EOL;
	file_put_contents(FILE, $logMessage, FILE_APPEND);
	
	if (isset($updateData["message"])) {
		$chat_ID =  $updateData["message"]["chat"]["id"];
		$message = $updateData["message"]["text"];
	
		switch ($message) {
			case '/ayuda':
				sendMessage($chat_ID, "Te ayudo");
				break;
			case '/miid':
				sendMessage($chat_ID, $chat_ID);
				break;
			case '/hola':
				sendMessage($chat_ID, "Hola pipi");
				break;
			case '/start':
				sendMessage($chat_ID, "Hola pipi");
				break;    
			default:
				sendMessage($chat_ID, "No entendi $message");
				break;
		}
	}
	
	function sendMessage($chat_ID, $message) {
		$url = WEBSITE.'/sendMessage?chat_id='.$chat_ID.'&parse_mode=HTML&text='.urlencode($message);
		file_get_contents($url);
	}
	