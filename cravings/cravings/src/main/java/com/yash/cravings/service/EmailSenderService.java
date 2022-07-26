package com.yash.cravings.service;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
	@Autowired
	private JavaMailSender mailSender;
public void sendSimpleEmail(String toEmail,String body,String subject)
{
	SimpleMailMessage message = new SimpleMailMessage();
	message.setFrom("snackcraving16@gmail.com");
	message.setTo(toEmail);
	message.setText(body);
	message.setSubject(subject);
	
	mailSender.send(message);
	System.out.println("Sent");
}
public void sendEmailwithAttach(String toEmail, String body,String subject,String attachment)throws MessagingException {
	MimeMessage mimeMessage = mailSender.createMimeMessage();
	MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
	mimeMessageHelper.setFrom("snackcraving16@gmail.com");
	mimeMessageHelper.setTo(toEmail);
	mimeMessageHelper.setText(body);
	mimeMessageHelper.setSubject(subject);
	FileSystemResource filesystem = new FileSystemResource(new File(attachment));
	mimeMessageHelper.addAttachment(filesystem.getFilename(),filesystem);
	mailSender.send(mimeMessage);
	System.out.println("sent");
}
}
