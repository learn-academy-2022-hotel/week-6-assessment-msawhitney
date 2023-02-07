# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Define a class called BlogPosts Controller and define it as a subclass of ApplicationController. This means that it inherits all of the methods and properties of the parent class (ApplicationController.)
class BlogPostsController < ApplicationController
  def index
    # ---2) This code (when index is called) will return all blog posts that are in the database. 
    @posts = BlogPost.all
  end

  # ---3) This is defining a method called "show" that will display a blog based on its ID (when called with an ID # argument).
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This code is a method to display a form for creating a new blog post and create a new instance of the model (database) called Blogpost.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This gets the requested blog post based on its ID and stores it. If the blog post is valid, it redirects to show the page for the updated blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This finds the specific blog post requested by ID and shows a form for editing the post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This updates the blog post with the private parameters (which are below under private)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) After the post is deleted, the following redirects to the index page of the blogs.
      redirect_to blog_posts_path
    end
  end

  # ---9) This is declaring the method below it as private. This means the method can't be called implicitely. It may only be called within the class and can't be called externally. 
  private
  def blog_post_params
    # ---10) This requires a key called :blog_post in the parameters that are submitted and permits the title and content to be shown with the required params.
    params.require(:blog_post).permit(:title, :content)
  end
end
