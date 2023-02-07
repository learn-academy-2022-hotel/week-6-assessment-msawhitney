# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I would need to add the foreign key to the Student model so I can link it to Cohort. The foreign key for the Cohort model would be the primary key of the Student model. 

has_many: Cohort model has many students.
belongs_to: Student model belongs to Cohort model.

Researched answer: To fix the mistake, I would need to add the foreign key to the Student model and link it to the Cohort model. The foreign key would be named: cohort_id because the convention is [model name]_id where model name is the name of the model it belongs to. 
This is how to think of it: 
has_many: Cohort model "has many" students, meaning it can have many Student records associated with it.
belongs_to: Student model "belongs to" Cohort model because each Student record is only associated with one Cohort.
The Cohort model is the parent. 
The Student model is the child. 

This is the code to add the foreign key: 

class AddCohortIdtoStudents < ActiveRecord::Migration
    def change
    add_foreign_key :students, :cohort_id, :integer
    end
end    

2. Which RESTful routes must always be passed params? Why?

Your answer: Put and patch, since they are used for updating the database.

Researched answer: I created a table from various resources to help me study. (https://docs.google.com/document/d/1gTu4OktDzovGHMg4dlVFAhiWJKECHiYVrp1Yv-vQ9dM/edit?usp=sharing)

The RESTful routes that need params are those where a specific record in the model must be updated (modified) or shown. Those would be GET (for show), GET (for edit), PUT and PATCH (for update), and DELETE. 

3. Name three rails generator commands. What is created by each?

Your answer: 
The generate command generates new code (short-cut alias: "g")
    1. rails generate model - generates the database
    2. rails g rpec:install - installs the rspec testing information
    3. rails g controller - generates a controller with views
    4. rails g resource - generates the RESTful routes resource
    5. rails g migration - generates a migration file


Researched answer: From the Ruby on Rails guide. 
"Using generators will save you a large amount of time by writing boilerplate code, code that is necessary for the app to work."
    1. rails generate model - generates the database
    2. rails g rpec:install - installs the rspec testing information
    3. rails g controller - generates a controller with views
    4. rails g resource - generates the RESTful routes resource

Also a good resource: https://devtut.github.io/rubyonrails/rails-generate-commands.html#rails-generate-model

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
controller method: students#index
action performed: display a list of students

action: "POST" location: /students
controller method: students#create
action performed: manipulate the database to add a new student, then redirect

action: "GET" location: /students/new
controller method: students#new
action performed: return HTML form for creating a new student

action: "GET" location: /students/2
controller method: students#show
action performed: display a specific student record


action: "GET" location: /students/2/edit
controller method: students#edit
action performed: show HTML form to edit one student record

action: "PATCH" location: /students/2
controller method: students#update
action performed: manipulate the database to update a specific student record

action: "DELETE" location: /students/2
controller method: students#destroy
action performed: manipulate the database to delete a specific student record, then redirect

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


1. As a developer, I want to keep track of my tasks so I need a list.
2. As a user, I want my task list to be easy to create and simple.
3. As a user, I want my task list to be private.
4. As a user, I want tasks on my task list to be easy to check off and mark as done. 
5. As a user, I want to be able to add tasks to a daily list - in case I have tasks that repeat every day. 
6. As a user, I  want to see a date on the daily tasks and be able to transfer them to the next day if they aren't complete, or delete them, or add them to a "future" file.
7. As a user, I want to sort my tasks by priority so I can see what's most important to do. 
8. As a user, I want to be able to categorize my tasks by project.
9. As a user, I want to view a summary of my progress. 
10. As a user, I want to be able to edit my tasks easily/ 