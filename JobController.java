package com.niit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.niit.dao.JobDao;
import com.niit.model.MyJob;

@RestController
public class JobController {
	
	@Autowired
	JobDao jobDao;
	
	@PostMapping("/jobposting")
	public ResponseEntity<MyJob> jobPosting(@RequestBody MyJob job)
	{
		jobDao.add(job);
		return new ResponseEntity<MyJob>(job, HttpStatus.OK);
	}

	
	@GetMapping("/alljobs")
	public ResponseEntity<List<MyJob>> allJobs()
	{
 		List<MyJob> list=jobDao.list();
 		for(MyJob j: list)
 		{
 			System.out.println(j.getDated());
 		}
		return new ResponseEntity<List<MyJob>>(list,HttpStatus.OK);
	}
}