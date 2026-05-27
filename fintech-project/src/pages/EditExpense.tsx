import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddButton from "../components/AddButton";
import TransactionForm from "../components/TransactionForm";
import ExpenseForm from "../components/ExpenseForm";
import TransactionAddHeader from "../components/TransactionAddHeader";
import type { Expense } from "../types/Expense";

interface EditExpenseProps {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const EditExpense = ({ expenses, setExpenses }: EditExpenseProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [isPaid, setIsPaid] = React.useState("false");
  const [recurringPayment, setRecurringPayment] = React.useState("false");

  // 🔥 BUSCAR DADOS DO BACKEND
  React.useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/expenses/${id}`
        );
        const data = await response.json();

        setAmount(String(data.amount));
        setDate(data.date);
        setDescription(data.description);
        setPaymentMethod(data.paymentMethod);
        setIsPaid(data.paid ? "true" : "false");
        setRecurringPayment(data.recurringPayment ? "true" : "false");
      } catch (error) {
        console.log(error);
      }
    };

    fetchExpense();
  }, [id]);

  const handleUpdateExpense = async () => {
    const updatedExpense = {
      id: Number(id),
      user: { id: 1 },
      category: { id: 2 },
      amount: Number(amount),
      date,
      description,
      paymentMethod,
      paid: isPaid === "true",
      recurringPayment: recurringPayment === "true",
    };

    try {
      await fetch(`http://localhost:8080/api/expenses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExpense),
      });

      setExpenses((prev) =>
        prev.map((exp) =>
          exp.id === Number(id) ? updatedExpense : exp
        )
      );

      navigate("/expenses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="col-11 mx-auto">
        <TransactionAddHeader
          name="Edit Expense"
          color="texto-vermelho"
          icon="bi bi-pencil"
          amount={amount}
          setAmount={setAmount}
        />

        <TransactionForm
          date={date}
          setDate={setDate}
          description={description}
          setDescription={setDescription}
        />

        <ExpenseForm
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          isPaid={isPaid}
          setIsPaid={setIsPaid}
          recurringPayment={recurringPayment}
          setRecurringPayment={setRecurringPayment}
        />

        <AddButton text="Update Expense" onClick={handleUpdateExpense} />
      </div>
    </>
  );
};

export default EditExpense;