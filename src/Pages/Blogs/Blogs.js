import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => { 
    useTitle('Blogs');
    return (
        <div className='w-10/12 m-auto mt-10 text-start'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-lg font-medium ">
                    Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content bg-slate-300">
                    <small>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</small>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-lg font-medium">
                	What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-slate-300">
                    <small>JWT: <br/>JSON Web Token is an open industry standard used to share information between two entities</small><br/><br/>
                    <small>How does it works: <br/>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</small>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-lg font-medium">
                	What is the difference between JavaScript and NodeJS?
                </div>
                <div className="collapse-content bg-slate-300">
                    <small>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</small>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div className="collapse-title text-lg font-medium">
                	How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-slate-300">
                    <small>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</small>
                </div>
            </div>
        </div>
    );
};

export default Blogs;