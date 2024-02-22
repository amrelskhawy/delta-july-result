"use client";

import React, { useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";




export default function StudentInfo({ student }) {

  const {
    name,
    id,
    code,
    practical,
    thero,
    E,
    total
  } = student

  function getStatus(grade, max) {

    switch (true) {
      case grade === null:
        return 'لم يحضر';
      case grade < max / 2:
        return grade + ' - راسب';
      default:
        return grade;
    }
  }

  function getColor(grade, max) {

    switch (true) {
      case grade === null:
        return 'warning';
      case grade < max / 2:
        return 'danger';
      default:
        return 'success';
    }
  }


  function isPassed() {
    if (
      parseInt(practical) >= 45 &&
      parseInt(thero) >= 25 &&
      parseInt(E) >= 10
    ) {
      return 'success'
    }

    return 'danger'
  }


  return (
    <div className="relative grid gap-4 mb-24">

      <h3 className="section__title text-3xl">معلومات الطالب</h3>

      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-start">اسم الطالب</TableColumn>
          <TableColumn className="text-start">
            {name}
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>الرقم القومى</TableCell>
            <TableCell>
              {id}
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>الاكاديمية</TableCell>
            <TableCell>
              الدلتا للتدريب
            </TableCell>
          </TableRow>

          <TableRow key="3">
            <TableCell>الرقم الاكاديميى</TableCell>
            <TableCell>
              {code}
            </TableCell>
          </TableRow>

          <TableRow key="4">
            <TableCell>الفرع</TableCell>
            <TableCell>
              {
                `${code}`.slice(0, 1) === 'D' ? 'دسوق' : 'كفر الشيخ'
              }

            </TableCell>
          </TableRow>

          <TableRow key="4">
            <TableCell>مشاركة مع</TableCell>
            <TableCell>
              <div>
                <FacebookShareButton
                  url={"https://deltaacademy-natega.netlify.app/student/" + id} >
                  <FacebookIcon size={30} />
                </FacebookShareButton>

                <WhatsappShareButton url={"https://deltaacademy-natega.netlify.app/student/" + id}>
                  <WhatsappIcon size={30} />
                </WhatsappShareButton>


              </div>

            </TableCell>
          </TableRow>


        </TableBody>
      </Table>

      {/* <h3 className="section__title">
        الأقساط الدراسية
      </h3>


      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-start">
            القسط
          </TableColumn>
          <TableColumn className="text-center">
            الحالة
          </TableColumn>

        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>
              مقدم
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={beg === 1 ? 'success' : "danger"}>
                {beg === 1 ? 'تم الدفع' : 'لم يتم الدفع'}
              </Chip>
            </TableCell>
          </TableRow>

          <TableRow key="2">
            <TableCell>
              القسط الاول
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={first === 1 ? 'success' : "danger"}>
                {first === 1 ? 'تم الدفع' : 'لم يتم الدفع'}
              </Chip>
            </TableCell>
          </TableRow>

          <TableRow key="3">
            <TableCell>
              القسط التانى
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={second === 1 ? 'success' : "danger"}>
                {second === 1 ? 'تم الدفع' : 'لم يتم الدفع'}
              </Chip>
            </TableCell>
          </TableRow>

          <TableRow key="4">
            <TableCell>
              القسط التالت
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={third === 1 ? 'success' : "danger"}>
                {third === 1 ? 'تم الدفع' : 'لم يتم الدفع'}
              </Chip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}

      <h3 className="section__title">
        نتيجة الترم التانى
      </h3>

      <Table aria-label="Example static collection table" >
        <TableHeader >
          <TableColumn className="text-start">المادة</TableColumn>
          <TableColumn className="text-start">درجة الطالب</TableColumn>
          <TableColumn className="text-start">الدرجة العظمى</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="font-medium">التمريض العملى</TableCell>
            <TableCell className="text-center">

              <Chip className="text-white font-bold" color={getColor(practical, 90)}>
                {getStatus(practical, 90)}
              </Chip>
            </TableCell>
            <TableCell className="text-center">90</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="font-medium">التمريض النظرى</TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={getColor(thero, 50)}>
                {getStatus(thero, 50)}
              </Chip>
            </TableCell>
            <TableCell className="text-center">50</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className="font-medium">English</TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={getColor(E, 20)}>
                {getStatus(E, 20)}
              </Chip>
            </TableCell>
            <TableCell className="text-center">30</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-medium">المجموع الكلى</TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={isPassed()} >
                {total}
              </Chip>

            </TableCell>
            <TableCell className="text-center">
              170
            </TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell className="font-medium">حالة الطالب</TableCell>
            <TableCell></TableCell>
            <TableCell colSpan={2}>
              <Chip className="text-white font-bold" color={isPassed()}>
                {isPassed() === 'success' ? 'ناجح' : 'راسب'}
              </Chip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
