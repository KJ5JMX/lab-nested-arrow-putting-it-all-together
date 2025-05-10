function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    attemptCount++;

    // lock-out if over 3 tries
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // success on or before try #3
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    //  rong but still under 3 tries
    return `Login attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}


const user = {
  username: "user1",
  password: "password123",

};


const login = createLoginTracker(user);

// working 1st try
console.log( login("password123") ); 


// testing
console.log( login("wrong") );  // login attempt 1: Login failed
console.log( login("nope") );   // login attempt 2: Login failed
console.log( login("password1234") );   // 4th try with correct password but still bad




module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};