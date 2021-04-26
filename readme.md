## Laravel React Services


### Features
| Laravel React Services Features |
| :------------ |
|Built on [Laravel](http://laravel.com/) 5.7|
|Built on [Bootstrap](https://getbootstrap.com/) 4|
|Front End Built on [ReactJS](https://reactjs.org/)|

### Installation Instructions

1.  `cp .env.example .env`
2.  `composer update` 
3.  `php artisan key:generate`
4.  `yarn install`
5.  `yarn run dev` or `yarn run production`
  * You can watch assets with `yarn run watch`
6. `php artisan serve`

### Routes

```
+--------+----------+------------------------+------+------------------------------------------------+------------+
| Domain | Method   | URI                    | Name | Action                                         | Middleware |
+--------+----------+------------------------+------+------------------------------------------------+------------+
|        | GET|HEAD | /                      |      | Closure                                        | web        |
|        | GET|HEAD | api/services           |      | App\Http\Controllers\ServicesController@index  | api        |
|        | POST     | api/services           |      | App\Http\Controllers\ServicesController@store  | api        |
|        | GET|HEAD | api/services/{service} |      | App\Http\Controllers\ServicesController@show   | api        |
|        | PUT      | api/services/{service} |      | App\Http\Controllers\ServicesController@update | api        |
|        | DELETE   | api/services/{service} |      | App\Http\Controllers\ServicesController@delete | api        |
+--------+----------+------------------------+------+------------------------------------------------+------------+
```

