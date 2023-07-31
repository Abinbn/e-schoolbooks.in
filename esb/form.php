<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

// Create a new row in the Excel file and save the form data
$excelFile = "    C:\Users\User\Desktop\esb website\e-schoolbooks.in\esb.xlsx";
$worksheetName = "Sheet1";

// Open the Excel file
$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($excelFile);
$worksheet = $spreadsheet->getSheetByName($worksheetName);

// Find the next available row
$highestRow = $worksheet->getHighestRow();
$row = $highestRow + 1;

// Set the form data in the respective cells
$worksheet->setCellValue('A' . $row, $name);
$worksheet->setCellValue('B' . $row, $email);
$worksheet->setCellValue('C' . $row, $number);
$worksheet->setCellValue('D' . $row, $message);

// Save the changes to the Excel file
$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);
$writer->save($excelFile);

// Redirect to the thank you page
header("Location: file:///C:/Users/User/Desktop/esb%20website/e-schoolbooks.in/thankyou.html");
exit;
?>
