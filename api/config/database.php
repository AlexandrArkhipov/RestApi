<?php
class Database{

    public $conn;
	// получаем соединение с БД 
    public function getConnection(){

        $this->conn = null;

		$config = parse_ini_file('parameters.ini', true);
	
		/* Подключение к базе данных MySQL с помощью вызова драйвера */
		$dsn = 'mysql:dbname=' . $config['database']['name'] . ';host=' . $config['database']['host'];
		$user = $config['database']['user'];
		$password = $config['database']['password'];
		
		try {
			$this->conn = new PDO($dsn, $user, $password);
			$this->conn->exec("set names utf8");

        } catch(PDOException $exception){
            echo "Подключение не удалось: " . $exception->getMessage();
        }

        return $this->conn;
    }	
}
	
?>