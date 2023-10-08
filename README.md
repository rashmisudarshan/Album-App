# Album-App

Prerequisites:

1) pip: Package manager for python
2) virtualenv: Virtual environment manager
3) npm: Node package manager

Instructions to install Django dependencies:

If you are using Visual Studio Code, this can be done automatically from the requirements.txt file by clicking the "create environment" button and then activating the environment.

![Screenshot from 2023-10-08 10-30-02](https://github.com/rashmisudarshan/Album-App/assets/62276702/bfd598d6-52df-4621-be37-69b96f9913a5)

    

    Else follow these steps:

        1) Open the project folder 'Album-App'
        2) Create a virtual environment: python -m venv .venv
        3) Activate the virtual environment: source .venv/bin/activate
        4) Change directory to /Album-App/Project1/music_app (requirements.txt should be present)
        5) Run pip install -r requirements.txt

To start the server:

    1) cd Album-App
    2) source .venv/bin/activate
    3) cd Project1/music_app
    4) python manage.py runserver

Instructions to install Node dependencies and start the frontend:

    1) cd Album-App/frontend/blogapi
    2) npm install --legacy-peer-deps
    3) npm start

   

