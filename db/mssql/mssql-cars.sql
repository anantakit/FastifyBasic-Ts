USE [master]
GO

IF DB_ID('inventorys') IS NOT NULL
  set noexec on               -- prevent creation when already exists

CREATE DATABASE [inventorys];
GO

USE [inventorys]
GO

