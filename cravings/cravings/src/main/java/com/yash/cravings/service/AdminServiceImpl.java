package com.yash.cravings.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.cravings.model.Admin;
import com.yash.cravings.repository.AdminRepository;
import com.yash.cravings.repository.UserRepository;
@Service
public class AdminServiceImpl implements AdminService {
@Autowired
private AdminRepository adminrepository;
//	@Override
//	public Admin saveAdmin(Admin admin) {
//		// TODO Auto-generated method stub
//		
//		return adminrepository.save(admin);
//	}


@Override
public Admin loginAdmin(String email) {
	// TODO Auto-generated method stub
	Admin a = null;
	try {
		a = adminrepository.findById(email).get();
	}
	catch(Exception e)
	{
		return null;
	}
	return a;
}


}
