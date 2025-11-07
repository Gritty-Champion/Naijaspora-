# Naijaspora Backend API - Frontend Integration Guide

## Base URL
```
http://localhost:5000
```

## CORS Configuration
The backend accepts requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`
- Production URLs (Vercel deployments)

Credentials (cookies) are enabled for authentication.

---

## Authentication Flow

### JWT-Based Authentication
The API uses JWT tokens with the following structure:
- **Access Token**: Short-lived (1 day), sent in response body
- **Refresh Token**: Long-lived (7 days), stored as HttpOnly cookie

### Access Token Payload
```typescript
{
  sub: string;      // User ID
  email: string;    // User email
  role: string;     // "user" or "admin"
  iat: number;      // Issued at
  exp: number;      // Expires at
}
```

### Required Headers for Protected Routes
```
Authorization: Bearer <access_token>
```

---

## API Endpoints

### 1. Authentication Endpoints (`/api/auth`)

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```typescript
{
  first_name: string;    // 2-34 characters, required
  last_name: string;     // 2-34 characters, required
  email: string;         // Valid email, required
  password: string;      // Min 8 chars, must contain uppercase, lowercase, number, and special character
}
```

**Validation Rules:**
- First name: 2-34 characters
- Last name: 2-34 characters
- Email: Valid email format
- Password: Min 8 chars + uppercase + lowercase + number + special character

**Success Response (201):**
```json
{
  "message": "Registered successfully. Please verify your email."
}
```

**Error Response (400):**
```json
{
  "message": "Email already registered"
}
```

---

#### POST `/api/auth/verify`
Verify email with token sent to user's email.

**Request Body:**
```typescript
{
  token: string;  // JWT token from email verification link
}
```

**Success Response (200):**
```json
{
  "message": "Email verified successfully"
}
```

**Error Response (400):**
```json
{
  "message": "Verification link expired"
}
// OR
{
  "message": "Invalid verification token"
}
```

---

#### POST `/api/auth/login`
Login with email and password.

**Request Body:**
```typescript
{
  email: string;
  password: string;
}
```

**Success Response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
**Note:** Refresh token is set as HttpOnly cookie automatically.

**Error Responses:**
- 400: Missing email or password
- 401: Invalid credentials
- 403: Email not verified

---

#### POST `/api/auth/refresh`
Refresh access token using refresh token cookie.

**Request:**
Requires `refreshToken` cookie (automatically sent by browser).

**Success Response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response (401):**
```json
{
  "message": "Invalid refresh token"
}
```

---

#### POST `/api/auth/logout`
Logout user and clear refresh token.

**Request:** No body required (uses refresh token cookie).

**Success Response (204):**
No content.

---

#### POST `/api/auth/re-verify`
Resend verification email.

**Request Body:**
```typescript
{
  email: string;
}
```

**Success Response (200):**
```json
{
  "message": "Verification email resent"
}
```

---

#### GET `/api/auth/google`
Initiate Google OAuth flow. Redirect user to this endpoint.

**Response:** Redirects to Google login page.

---

#### GET `/api/auth/google/callback`
Google OAuth callback (handled automatically by Passport).

**Success Response (200):**
```json
{
  "accessToken": "...",
  "refreshToken": "..."
}
```

---

### 2. User Endpoints (`/api/user`)

#### GET `/api/user/me`
Get current authenticated user details.

**Headers Required:**
```
Authorization: Bearer <access_token>
```

**Success Response (200):**
```typescript
{
  user: {
    _id: string;
    email: string;
    role: "user" | "admin";
    isVerified: boolean;
    provider?: string;
    createdAt: string;
    updatedAt: string;
  },
  profile: {
    _id: string;
    user: string;
    first_name: string;
    last_name: string;
    date_of_birth?: string;
    email?: string;
    phone?: string;
    current_location?: "Nigeria" | "Abroad";
    country_of_residence?: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

---

### 3. Service Endpoints (`/api/services`)

All service endpoints require authentication.

#### POST `/api/services/visa-preps`
Create a visa interview preparation request.

**Headers Required:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```typescript
{
  visa_type: string;                    // Required
  destination_country: string;          // Required
  is_admitted?: boolean;
  institution_name?: string;
  program_name?: string;
  program_start_date?: string;          // ISO8601 date
  offer_type?: string;
  tuition_paid?: string;
  scholarship?: {
    hasScholarship: boolean;
    details?: string;
  };
  proof_of_funds_help?: boolean;
  previous_travel?: {
    hasTraveled: boolean;
    details?: string;
  };
  visa_refused?: boolean;
  banned?: boolean;
  deported?: boolean;
  pending_asylum?: boolean;
  overstayed?: boolean;
  interview_booked?: boolean;
  interview_date?: string;              // ISO8601 date
  areas_of_help: string[];              // Required, array
  interview_format: string[];
  platform: string[];                   // Required, array
  agreed_terms: true;                   // Required, must be true
}
```

**Success Response (201):**
```json
{
  "message": "Visa preparation request created successfully",
  "data": { ...visa_interview_object }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "errors": [
    { "field": "visa_type", "message": "Visa type is required" }
  ]
}
```

---

#### POST `/api/services/agents-verification`
Verify an agent's legitimacy.

**Headers Required:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```typescript
{
  agent_name: string;                   // Required
  agent_phone: string;                  // Required
  agent_email?: string;                 // Optional, must be valid email
  agent_address?: string;
  service_offered: string;              // Required
  referral_source?: string;
  website_or_social?: string;
  claims_affiliation: boolean;          // Required
  affiliated_company?: string;
  has_license: boolean;                 // Required
  requested_service: string;            // Required
  related_country?: string;
  upfront_payment: boolean;             // Required
  payment_amount?: string;
  payment_currency?: string;
  payment_method?: string;
  payment_proof: boolean;               // Required
  signed_agreement: boolean;            // Required
  allow_contact_agent: boolean;         // Required
  keep_confidential: boolean;           // Required
  agreed_terms: true;                   // Required, must be true
}
```

**Success Response (201):**
```json
{
  "message": "Agent verification request created successfully",
  "data": { ...agent_verification_object }
}
```

---

#### POST `/api/services/documents-verification`
Request document verification.

**Headers Required:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```typescript
{
  document_types: string[];             // Required, array
  issuer_name: string;                  // Required
  issuer_country: string;               // Required
  received_via: "Direct" | "Intermediary";  // Required
  intermediary_name?: string;           // Required if received_via is "Intermediary"
  intermediary_email?: string;          // Required if received_via is "Intermediary"
  intermediary_phone?: string;          // Required if received_via is "Intermediary"
  uploaded_file?: string;
  verification_checks?: string[];
  urgency: "24h" | "2-3 days" | "1 week";  // Default: "2-3 days"
  allow_contact_issuer: boolean;        // Required
  keep_confidential: boolean;           // Required
  confirm_ownership: true;              // Required, must be true
}
```

**Success Response (201):**
```json
{
  "message": "Document verification request created successfully",
  "data": { ...document_verification_object }
}
```

---

#### POST `/api/services/loan-application`
Apply for an education loan.

**Headers Required:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```typescript
{
  institution_name: string;             // Required
  country_of_school: string;            // Required
  program_level: string;                // Required
  program_name: string;                 // Required
  program_start_date: string;           // Required, ISO8601 date
  tuition_and_living_cost: number;      // Required, numeric
  offer_status: "Conditional" | "Unconditional";  // Required
  financial_help: string[];             // Required, array
  total_amount_needed: string;          // Required
  has_guarantor_abroad: boolean;        // Required
  authorize_verification: true;         // Required, must be true
  fraud_history: boolean;               // Required
  understands_disqualification: true;   // Required, must be true
  agreed_terms: true;                   // Required, must be true
}
```

**Success Response (201):**
```json
{
  "message": "Loan application created successfully",
  "data": { ...loan_application_object }
}
```

---

### 4. Payment Endpoints (`/api/payments`)

#### GET `/api/payments/verify?reference=<reference>`
Verify Paystack payment.

**Query Parameters:**
- `reference`: Payment reference from Paystack

**Success Response (200):**
```json
{
  "message": "Payment verified successfully",
  "status": "completed",
  "payment": { ...payment_object }
}
```

**Error Response (400):**
```json
{
  "message": "Unable to verify payment",
  "error": "..."
}
```

---

## Data Models

### User Model
```typescript
{
  _id: string;
  email: string;
  password: string;           // Hashed, not returned in responses
  role: "user" | "admin";
  refreshToken?: string;
  isVerified: boolean;
  provider?: string;          // "google" for OAuth users
  providerId?: string;        // Google ID for OAuth users
  createdAt: Date;
  updatedAt: Date;
}
```

### User Profile Model
```typescript
{
  _id: string;
  user: string;               // Reference to User
  first_name: string;
  last_name: string;
  date_of_birth?: Date;
  email?: string;
  phone?: string;
  current_location?: "Nigeria" | "Abroad";
  country_of_residence?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Error Response Format

All validation errors follow this format:
```json
{
  "success": false,
  "errors": [
    {
      "field": "email",
      "message": "Valid email required"
    }
  ]
}
```

Standard error responses:
```json
{
  "message": "Error description"
}
```

---

## Integration Checklist

### 1. Environment Setup
Create a `.env` file in your frontend:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
# OR for React/Vue
VITE_API_URL=http://localhost:5000
# OR for CRA
REACT_APP_API_URL=http://localhost:5000
```

### 2. API Client Setup
Configure axios/fetch with:
- Base URL: `http://localhost:5000`
- Credentials: `include` (for cookies)
- Content-Type: `application/json`

**Example with Axios:**
```typescript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add access token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh on 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(
          'http://localhost:5000/api/auth/refresh',
          {},
          { withCredentials: true }
        );

        localStorage.setItem('accessToken', data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        // Redirect to login
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
```

### 3. Authentication State Management
Store:
- Access token in localStorage/memory
- User data in state management (Redux/Zustand/Context)
- Refresh token is handled automatically via cookies

### 4. Protected Routes
Check for valid access token before rendering protected components.

### 5. Form Validation
Implement client-side validation matching the backend rules to provide immediate feedback.

---

## Common Integration Patterns

### Login Flow
```typescript
const login = async (email: string, password: string) => {
  const response = await apiClient.post('/api/auth/login', {
    email,
    password,
  });

  // Store access token
  localStorage.setItem('accessToken', response.data.accessToken);

  // Fetch user data
  const userResponse = await apiClient.get('/api/user/me');

  return userResponse.data;
};
```

### Registration Flow
```typescript
const register = async (data: RegisterData) => {
  await apiClient.post('/api/auth/register', data);

  // Show message: "Check your email for verification link"
};
```

### Making Authenticated Requests
```typescript
const getUserProfile = async () => {
  const response = await apiClient.get('/api/user/me');
  return response.data;
};

const createVisaRequest = async (data: VisaData) => {
  const response = await apiClient.post('/api/services/visa-preps', data);
  return response.data;
};
```

### Logout Flow
```typescript
const logout = async () => {
  await apiClient.post('/api/auth/logout');
  localStorage.removeItem('accessToken');
  // Clear user state and redirect to login
};
```

---

## Payment Integration (Paystack)

### Paystack Public Key
```
pk_test_7190bb4162eadde42f27db1182f2d75e5724e919
```

### Payment Flow
1. Initialize payment on frontend using Paystack Inline/Popup
2. User completes payment
3. Get payment reference from Paystack callback
4. Verify payment: `GET /api/payments/verify?reference=<reference>`

**Example with Paystack Inline:**
```typescript
import { usePaystackPayment } from 'react-paystack';

const config = {
  reference: new Date().getTime().toString(),
  email: user.email,
  amount: 50000, // in kobo (500 NGN)
  publicKey: 'pk_test_7190bb4162eadde42f27db1182f2d75e5724e919',
};

const onSuccess = async (reference: any) => {
  // Verify payment
  const response = await apiClient.get(
    `/api/payments/verify?reference=${reference.reference}`
  );

  if (response.data.status === 'completed') {
    // Show success message
  }
};

const initializePayment = usePaystackPayment(config);
```

---

## Testing

### Test Credentials
Create test users via registration endpoint.

### Test Payment
Use Paystack test cards:
```
Card: 4084084084084081
CVV: 408
Expiry: Any future date
PIN: 0000
OTP: 123456
```

---

## Notes

- All dates should be in ISO8601 format
- All boolean fields that are "required" in forms must be validated as `true` (not just any boolean)
- The backend uses bcrypt for password hashing (12 rounds)
- Refresh tokens are stored hashed in the database
- Email verification tokens expire (check JWT expiration)
- CORS is configured, ensure your frontend URL matches allowed origins
