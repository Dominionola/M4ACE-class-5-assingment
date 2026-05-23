# HTTP Status Codes for REST APIs

## Success Codes (2xx)

### 200 - OK

- **When to use:** GET, PUT, DELETE requests that succeed
- **Meaning:** Request was successful and the server is returning the requested data
- **Example:** Retrieving a user, updating user details, deleting a user
- **Your usage:**
  ```javascript
  res.status(200).json({ success: true, data: foundUser });
  ```

### 201 - Created

- **When to use:** POST requests that successfully create a new resource
- **Meaning:** The request succeeded and a new resource was created
- **Example:** Creating a new user
- **Your usage:**
  ```javascript
  res.status(201).json({ success: true, data: newUser });
  ```

### 204 - No Content

- **When to use:** Successful requests with no response body
- **Meaning:** Request succeeded but there's no content to return
- **Example:** DELETE operations that don't need to return the deleted data

---

## Client Error Codes (4xx)

### 400 - Bad Request

- **When to use:** Invalid request syntax or malformed data
- **Meaning:** The server cannot process the request due to client error
- **Example:** Missing required fields, invalid data format
- **Your usage:**
  ```javascript
  res.status(400).json({ success: false, message: "Missing required fields" });
  ```

### 404 - Not Found

- **When to use:** Resource doesn't exist
- **Meaning:** The requested resource could not be found
- **Example:** User ID doesn't exist, post ID not found
- **Your usage:**
  ```javascript
  return next(new AppError("No User found with this ID", 404));
  ```

### 401 - Unauthorized

- **When to use:** Authentication failed or missing
- **Meaning:** User is not authenticated (not logged in)
- **Example:** Missing or invalid JWT token, invalid credentials

### 403 - Forbidden

- **When to use:** User is authenticated but lacks permission
- **Meaning:** User is authenticated but not authorized to access the resource
- **Example:** User trying to access another user's private data

### 409 - Conflict

- **When to use:** Request conflicts with existing data
- **Meaning:** Request cannot be completed due to conflict with existing state
- **Example:** Creating a user with duplicate email, updating with conflicting data

---

## Server Error Codes (5xx)

### 500 - Internal Server Error

- **When to use:** Unexpected server errors
- **Meaning:** Server encountered an error and couldn't complete the request
- **Example:** Database connection failed, unhandled exception

### 503 - Service Unavailable

- **When to use:** Server is temporarily unavailable
- **Meaning:** Server is down for maintenance or overloaded
- **Example:** Database is offline, server restarting

---

## Quick Reference for Your API

| Operation            | Status Code | Example                    |
| -------------------- | ----------- | -------------------------- |
| GET all users        | 200         | Retrieved successfully     |
| GET single user      | 200         | User found and returned    |
| POST (create user)   | 201         | User created successfully  |
| PUT (update user)    | 200         | User updated successfully  |
| DELETE (remove user) | 200         | User deleted successfully  |
| User not found       | 404         | No user with this ID       |
| Invalid request      | 400         | Missing required fields    |
| Server error         | 500         | Database connection failed |

---

## REST API Best Practices for Status Codes

1. **Use 200** for successful GET, PUT, DELETE operations
2. **Use 201** for successful POST operations (resource created)
3. **Use 404** when resource is not found
4. **Use 400** for invalid input or bad requests
5. **Use 500** for server errors
6. **Never use 200** for errors - always use proper error codes

## Example Response Structure

```javascript
// Success Response
res.status(200).json({
  success: true,
  data: user,
});

// Error Response
res.status(404).json({
  success: false,
  message: "Resource not found",
});
```
