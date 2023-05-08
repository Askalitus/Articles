# Articles
## Устанавливаем репозиторий

```sh
git clone https://github.com/Askalitus/Articles.git
```

```
cd Articles
```

```
code .
```

## Устанавливаем зависимости

```sh
cd web
```

```
npm i
```

```
cd ..
```

```
cd server
```

```
npm i
```

## Заполняем конфигурацию миграции актуальными данными

/server/app/config/config.json

## Мигрируем таблицы и сиды

```sh
cd app
```

```
npx sequelize db:migrate
```

```
npx sequelize db:seed:all
```

## Запускаем сервер

```sh
cd ..
```

```
node server.js
```
## Запускаем фронт (в новом теминале)

```sh
cd web
```

```
npm run dev
```
