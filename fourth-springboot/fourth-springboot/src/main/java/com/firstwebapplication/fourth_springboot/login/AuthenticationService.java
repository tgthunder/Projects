package com.firstwebapplication.fourth_springboot.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
	
	public boolean authenticate(String username , String password)
	{
		boolean isValidUsername = username.equalsIgnoreCase("sudarshan");
		boolean isValidPass = password.equalsIgnoreCase("Sudarshan@09");
		return (isValidUsername && isValidPass);
	}
}
