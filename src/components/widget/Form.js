import React from "react";

export default function Form() {
  return (
    <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
      
        <div class="form-group">
            <input type="text" class="form-control" id="name" name='name' placeholder="Full Name" required/>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" id="email" name='email' placeholder="Email"/>
        </div>
        <div class="form-group">
            <textarea class="form-control" id="message" name='message' rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-dark">Submit</button>
    </form>
  );
}

