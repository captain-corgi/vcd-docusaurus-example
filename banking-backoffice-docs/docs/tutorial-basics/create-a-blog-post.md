---
sidebar_position: 2
---

# Setting Up User Permissions for New Employees

Learn how to properly configure user accounts and permissions for new banking staff members. This tutorial ensures compliance with security protocols and regulatory requirements.

## Before You Begin

Ensure you have:

- **User Administration** permissions in the system
- **HR approval documentation** for the new employee
- **Role specification** from the employee's supervisor
- **Security clearance verification** completed

## Step 1: Gather Required Information

Before creating any user account, collect all necessary information:

### Employee Information Checklist

```md title="New Employee Setup Checklist"
✓ Full legal name (as it appears on government ID)
✓ Employee ID number
✓ Department and branch location
✓ Job title and role description
✓ Supervisor name and contact information
✓ Start date and employment status
✓ Security clearance level
✓ Required system access levels
```

### Documentation Required

- **HR Authorization Form** (signed by HR manager)
- **Security Clearance Certificate**
- **Job Description** with system access requirements
- **Supervisor Approval** for specific permissions

## Step 2: Create the User Account

Navigate to **User Management** → **Create New User**:

### Basic Account Setup

```md title="Account Creation Process"
1. Enter employee's full legal name
2. Create unique username (format: firstname.lastname)
3. Set temporary password (must be changed on first login)
4. Enter employee ID number
5. Select department and branch
6. Set account status to "Pending Activation"
7. Configure password expiration (90 days)
```

### Contact Information

```md title="Contact Details"
1. Work email address (auto-generated: username@yourbank.com)
2. Work phone number and extension
3. Mobile number (for 2FA)
4. Emergency contact information
5. Physical work location/desk assignment
```

## Step 3: Assign Role-Based Permissions

Select the appropriate role template based on the employee's position:

### Standard Banking Roles

#### Bank Teller

```md title="Teller Permissions"
✓ Transaction Processing (deposits, withdrawals)
✓ Account Balance Inquiries
✓ Customer Information Lookup
✓ Receipt Printing
✓ Cash Drawer Management
✗ Account Creation/Modification
✗ User Management
✗ System Administration
```

#### Account Manager

```md title="Account Manager Permissions"
✓ All Teller permissions
✓ Account Creation and Modification
✓ Loan Application Processing
✓ Customer Relationship Management
✓ Advanced Reporting
✓ Transaction Approval (up to $50,000)
✗ User Management
✗ System Configuration
```

#### Operations Supervisor

```md title="Supervisor Permissions"
✓ All Account Manager permissions
✓ Staff User Management (within department)
✓ Transaction Approval (up to $100,000)
✓ Audit Report Access
✓ Compliance Monitoring
✓ System Configuration (limited)
✗ Global User Management
✗ Security Administration
```

#### Compliance Officer

```md title="Compliance Permissions"
✓ All transaction monitoring
✓ Audit log access
✓ Regulatory reporting
✓ Suspicious activity investigation
✓ Policy management
✓ Training administration
✗ Transaction processing
✗ Customer account modification
```

## Step 4: Configure Security Settings

### Multi-Factor Authentication

1. **Enable 2FA**: Required for all users
2. **SMS Setup**: Configure mobile number for SMS codes
3. **Backup Codes**: Generate and securely store backup codes
4. **Authenticator App**: Optional additional security layer

### Access Restrictions

```md title="Security Configuration"
1. Set login time restrictions (business hours only)
2. Configure IP address restrictions (office networks)
3. Set concurrent session limits (1 active session)
4. Enable automatic logout (30 minutes inactivity)
5. Configure failed login attempt lockout (3 attempts)
```

### Transaction Limits

Based on role and experience level:

| Role | Daily Transaction Limit | Approval Required Above |
|------|------------------------|------------------------|
| New Teller | $10,000 | $5,000 |
| Experienced Teller | $25,000 | $10,000 |
| Account Manager | $100,000 | $50,000 |
| Supervisor | $500,000 | $100,000 |

## Step 5: Training and Activation

### Mandatory Training Modules

Before account activation, ensure completion of:

1. **Banking Fundamentals** (4 hours)
2. **System Navigation** (2 hours)
3. **Security Protocols** (2 hours)
4. **Compliance Requirements** (3 hours)
5. **Role-Specific Training** (varies by position)

### Account Activation Process

```md title="Activation Steps"
1. Verify training completion (100% required)
2. Conduct security briefing with new employee
3. Provide login credentials securely
4. Schedule first-day system walkthrough
5. Activate account on employee's start date
6. Monitor initial activity for first 30 days
```

## Step 6: Documentation and Compliance

### Required Documentation

Create and maintain:

- **User Account Creation Form**
- **Permission Assignment Record**
- **Training Completion Certificates**
- **Security Briefing Acknowledgment**
- **System Access Agreement**

### Audit Trail

Ensure all actions are logged:

```md title="Audit Requirements"
✓ Account creation timestamp and creator
✓ Permission assignments and modifications
✓ Training completion records
✓ First login date and time
✓ Any subsequent permission changes
```

## Common Setup Scenarios

### Scenario 1: Temporary Employee

**Situation**: 90-day contract employee needs limited access

**Configuration**:

1. Set account expiration date
2. Limit permissions to essential functions only
3. Require daily supervisor approval for transactions
4. Enhanced monitoring and logging
5. Automatic deactivation on contract end

### Scenario 2: Transferred Employee

**Situation**: Employee moving from another branch

**Configuration**:

1. Review existing permissions
2. Adjust for new role/location
3. Update branch and department assignments
4. Modify transaction limits if necessary
5. Provide location-specific training

### Scenario 3: Promoted Employee

**Situation**: Teller promoted to Account Manager

**Configuration**:

1. Gradually increase permissions
2. Provide additional training
3. Implement mentorship period
4. Monitor performance closely
5. Full permission activation after probation

## Security Best Practices

### During Setup

- **Verify identity** before creating any account
- **Use secure channels** for credential delivery
- **Document everything** for audit purposes
- **Follow principle of least privilege**
- **Get proper approvals** before activation

### After Setup

- **Monitor new user activity** for first 30 days
- **Conduct regular permission reviews** (quarterly)
- **Update training records** as completed
- **Respond quickly** to any security concerns

## Troubleshooting Common Issues

### Account Creation Problems

| Issue | Cause | Solution |
|-------|-------|----------|
| "Username already exists" | Duplicate username | Add middle initial or number |
| "Invalid employee ID" | ID not in HR system | Verify with HR department |
| "Permission denied" | Insufficient admin rights | Contact system administrator |
| "Training not complete" | Missing required courses | Complete all mandatory training |

### When to Escalate

- **Security clearance issues**: Contact security department
- **System errors**: Contact IT support (ext. 2222)
- **Policy questions**: Contact compliance (ext. 4444)
- **HR verification**: Contact HR department (ext. 1111)

## Next Steps

After setting up the new user:

1. Schedule [First Day Orientation](/docs/training/orientation)
2. Assign [Mentor/Buddy System](/docs/training/mentorship)
3. Plan [30-Day Review](/docs/user-management/reviews)
4. Set up [Performance Monitoring](/docs/user-management/monitoring)

---

**Remember**: Proper user setup is critical for security and compliance. Take time to verify all information and follow established procedures!
