-- MySQL Script generated by MySQL Workbench
-- Thu Mar 16 11:54:48 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema database
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `database` ;

-- -----------------------------------------------------
-- Schema database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `database` DEFAULT CHARACTER SET utf8 ;
USE `database` ;

-- -----------------------------------------------------
-- Table `database`.`Client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database`.`Client` (
  `cli_cod` INT NOT NULL AUTO_INCREMENT,
  `cli_name` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`cli_cod`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `database`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database`.`Product` (
  `prod_cod` INT NOT NULL AUTO_INCREMENT,
  `prod_quant` INT NOT NULL,
  `prod_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`prod_cod`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `database`.`Sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database`.`Sale` (
  `sal_cod` INT NOT NULL AUTO_INCREMENT,
  `sal_date` DATETIME NOT NULL,
  `Client_cli_cod` INT NOT NULL,
  `Product_prod_cod` INT NOT NULL,
  PRIMARY KEY (`sal_cod`, `Client_cli_cod`, `Product_prod_cod`),
  CONSTRAINT `fk_Sale_Client`
    FOREIGN KEY (`Client_cli_cod`)
    REFERENCES `database`.`Client` (`cli_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sale_Product1`
    FOREIGN KEY (`Product_prod_cod`)
    REFERENCES `database`.`Product` (`prod_cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;