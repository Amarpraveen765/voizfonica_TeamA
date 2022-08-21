package com.voizfonica.contact.contactservices;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 

@Repository
public interface CustomrRepository extends JpaRepository<ContactData, Integer> {

}