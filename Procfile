release: python manage.py migrate
web: gunicorn freespirits.wsgi --log-file -
frontend: npm build && npm start
